/# Reddit Downloader

This is a simple application built using NestJs to download videos from reddit.

## Description

Reddit has different ways of storing their videos. Videos without audio are stored in one place while audio is stored in a different location.
The goal of this application is to get both medias put them together and serve the original video with sound to the user.

1. The first step is to get a reddit video link, which one can get by using the share feature of reddit.
2. After getting the link we append ".json" to the end and visiting the link to get a json response.
3. From the json response we can the get access to the reddit video and audio links.
4. After getting the links we download the files and put them together using [ffmpeg](https://ffmpeg.org/) package.

The server has 2 endpoints.
* one for getting reddit link and creating video and audio links for different quality videos.
* the other for getting a download link and audio link and putting the 2 together.

## Rest Api

### Request
`POST /video`

    curl -i -H 'Accept: application/json' -d 'url=https://reddit.com/videolink' http://localhost:4000/video/

### Response
    HTTP/1.1 201 Created
    Date: Tue, 08 Nov 2022 21:50:21 CAT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json
    Location: /video/
    Content-Length: 282

    {
        "videoLinks": [
            "https://v.redd.it/ph1jjtteyly91/DASH_480.mp4?source=fallback",
            "https://v.redd.it/ph1jjtteyly91/DASH_360.mp4?source=fallback",
            "https://v.redd.it/ph1jjtteyly91/DASH_240.mp4?source=fallback"
        ],
        "audioLink": "https://v.redd.it/ph1jjtteyly91/DASH_audio.mp4?source=fallback"
    }

### Request
`GET /video`

    curl -i -H 'Accept: application/json' http://localhost:4000/video?videoUrl=https://v.redd.it/ph1jjtteyly91/DASH_480.mp4?source=fallback&audioUrl=https://v.redd.it/ph1jjtteyly91/DASH_audio.mp4?source=fallback

### Response
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Content-Type: application/octet-stream
    Content-Disposition: attachment; filename=eRl500zcSVlb3FEuHrq5Y8dzF541o7.mp4
    Content-Length: 694226
    Content-Transfer-Encoding: Binary
    Date: Tue, 08 Nov 2022 21:54:49 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```