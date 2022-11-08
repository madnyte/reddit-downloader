import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { RedditRequest, VideoRequest } from './dto';
import { Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('/')
  getVideoLinks(@Body() request: RedditRequest) {
    return this.videoService.getLinks(request);
  }

  @Get('/')
  getVideo(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: VideoRequest,
    @Res() response: Response,
  ) {
    return this.videoService.getVideo(query, response);
  }
}
