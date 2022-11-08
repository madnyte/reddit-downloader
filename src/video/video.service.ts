import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { RedditData, RedditRequest, VideoRequest } from './dto';
import { getAudioUrl, getVideoUrls, toJsonUrl } from './utils';
import { catchError, firstValueFrom } from 'rxjs';

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

  async getVideo(request: VideoRequest) {
    return request;
  }
}
