import * as url from 'url';
import { Url } from 'url';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RedditData } from '../dto';

// takes in a url string and converts it to url type
// then checks if it is a valid reddit url
export function toJsonUrl(urlString: string): HttpException | string {
  const link: Url = url.parse(urlString);

  if (link.protocol == null) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Bad Request: Missing Url Protocol',
      },
      HttpStatus.BAD_REQUEST,
    );
  } else if (!link.host.match(new RegExp('www.reddit.com|reddit.com', 'gi'))) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Bad Request: Invalid Reddit Url',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  return `https://${link.host}${link.pathname}.json`;
}

// get a list of video urls of different quality from highest to lowest
export function getVideoUrls(data: RedditData): string[] {
  const defaultUrl: string = data.secure_media.reddit_video.fallback_url;
  const videoHeight: number = data.secure_media.reddit_video.height;
  const heights = videoHeights(videoHeight);
  return heights.map((height) => {
    return defaultUrl.replace(new RegExp('DASH_[0-9]+'), `DASH_${height}`);
  });
}
// get link for audio
export function getAudioUrl(data: RedditData): string {
  const defaultUrl: string = data.secure_media.reddit_video.fallback_url;

  return defaultUrl.replace(new RegExp('DASH_[0-9]+'), 'DASH_audio');
}

// get height of video and returns a list of video heights below it
// 720 - for hd video and so on
export function videoHeights(height: number): number[] {
  switch (height) {
    case 1080:
      return [1080, 720, 480, 360, 240];
    case 720:
      return [720, 480, 360, 240];
    case 480:
      return [480, 360, 240];
    case 360:
      return [360, 240];
    default:
      return [height];
  }
}
// create a random file name
export function makeid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
