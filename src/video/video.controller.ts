import { Body, Controller, Post } from '@nestjs/common';
import { VideoService } from './video.service';
import { RedditRequest } from './dto';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('/')
  getVideoLinks(@Body() request: RedditRequest) {
    return this.videoService.getVideo(request);
  }
}
