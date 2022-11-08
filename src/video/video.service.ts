import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { RedditData, RedditRequest, VideoRequest } from './dto';
import { getAudioUrl, getVideoUrls, makeid, toJsonUrl } from './utils';
import { catchError, firstValueFrom } from 'rxjs';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Response } from 'express';

@Injectable()
export class VideoService {
  constructor(private readonly httpService: HttpService) {}

  async getLinks(request: RedditRequest) {
    const jsonLink = toJsonUrl(request.url);

    if (jsonLink instanceof HttpException) {
      return jsonLink;
    }

    const { data } = await firstValueFrom(
      this.httpService.get<RedditData>(jsonLink).pipe(
        catchError((err, _) => {
          throw err;
        }),
      ),
    );

    const redditData: RedditData = data[0].data.children[0].data;
    const videoLinks: string[] = getVideoUrls(redditData);

    return {
      videoLinks,
      audioLink: getAudioUrl(redditData),
    };
  }

  async getVideo(query: VideoRequest, res: Response) {
    const videoUrl = query.videoUrl;
    const audioUrl = query.audioUrl;

    try {
      const ffmpeg = createFFmpeg({ log: true });
      await ffmpeg.load();

      ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(videoUrl));
      ffmpeg.FS('writeFile', 'audio.mp4', await fetchFile(audioUrl));

      const outputName = makeid(30) + '.mp4';

      await ffmpeg.run(
        '-i',
        'video.mp4',
        '-i',
        'audio.mp4',
        '-c:v',
        'copy',
        '-c:a',
        'aac',
        outputName,
      );

      const outputData = ffmpeg.FS('readFile', outputName);
      ffmpeg.FS('unlink', 'video.mp4');
      ffmpeg.FS('unlink', 'audio.mp4');
      ffmpeg.FS('unlink', outputName);

      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=${outputName}`,
      );
      res.setHeader('Content-Length', outputData.length);
      res.setHeader('Content-Transfer-Encoding', 'Binary');

      res.end(Buffer.from(outputData));
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
