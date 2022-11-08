import * as url from 'url';
import { Url } from 'url';
import { HttpException, HttpStatus } from '@nestjs/common';

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
