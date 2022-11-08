import { Body, Controller, Get, Post } from '@nestjs/common';
import { VideoService } from './video.service';
import { RedditRequest, VideoRequest } from './dto';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('/')
  getVideoLinks(@Body() request: RedditRequest) {
    return this.videoService.getLinks(request);
  }

  @Get('/')
  getVideo(@Body() request: VideoRequest) {
    return this.videoService.getVideo(request);
  }
}
