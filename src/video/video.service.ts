import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { VideoRequest } from './dto';

@Injectable()
export class VideoService {
  constructor(private readonly httpService: HttpService) {}

  getVideo(request: VideoRequest) {
    return request;
  }
}
