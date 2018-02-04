# Audigo

Simple audio recording + upload + sharing web app  
🎤 ☁️ 🔊 👪

## Requirements
* Node 6.4.0 or newer
* [FFmpeg](http://www.ffmpeg.org/) with libmp3lame codec
* (for deployment) SSL + nginx with reverse proxy

## Installation

```cmd
npm install audigo
```

### Environment Variables

| Variable   | Default                                         |
|------------|-------------------------------------------------|
| `HOST`     | `localhost`                                     |
| `PORT`     | `3000` for development<br>`8080` for production |

### Reverse Proxy

```
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

## Run

Build the source `npm run build` and start the server `npm start`

## Development

Start the dev server `npm run dev` and open `http://localhost:3000`

## Technologies

* Built with [ARc](https://arc.js.org/)
  * React
    * react-router
    * react-helmet
  * Redux
    * redux-saga-thunk
  * Express
  * SSR
  * Webpack
    * webpack-dev-server
* Knex
* Multer
* FFmpeg
