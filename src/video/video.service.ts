import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { RedditRequest } from './dto';
import { toJsonUrl } from './utils';

@Injectable()
export class VideoService {
  constructor(private readonly httpService: HttpService) {}

  getVideo(request: RedditRequest) {
    const jsonLink = toJsonUrl(request.url);

    if (jsonLink instanceof HttpException) {
      return jsonLink;
    }
    return jsonLink;
  }
}
