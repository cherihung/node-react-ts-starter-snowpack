# NODE REACT TYPESCRIPT STARTER WITH SNOWPACK

A typescript starter base for an SPA client running on an Express server.
Frontend web is built and bundled using [snowpack](https://github.com/snowpackjs/snowpack).
Backend is built using TSC.

## Available Scripts

### yarn start

Runs server and web in the development mode.
Open http://localhost:8080 to view app in the browser.

Server is proxy through the frontend. 
Can be directly reached on port :3000/api 

### yarn build

Production build of server and web.
Web builds production site to the `WEB_BUILD/` folder.
Server builds procution to the `SERVER_BUILD/` folder. 


### yarn start-web

Start up web as an SPA without express server.

### yarn start-server

Start up server as a standlone express server.
