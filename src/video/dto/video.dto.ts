// RedditRequest

import { IsNotEmpty, IsUrl } from 'class-validator';

// a request to get reddit url response as json and return video urls
export class RedditRequest {
  @IsUrl()
  @IsNotEmpty()
  url: string;
}

// A request to the server with a reddit video link
// and / or audio link to merge the 2.
export class VideoRequest {
  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsUrl()
  audio?: string;
}
