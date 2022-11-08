import { Module } from '@nestjs/common';
import { VideoModule } from './video/video.module';
import { VideoController } from './video/video.controller';
import { VideoService } from './video/video.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [VideoModule, HttpModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class AppModule {}
