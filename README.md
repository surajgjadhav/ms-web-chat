# ms-web-chat

Customize Web Chat by Making the Component Minimizable.

## Description

A web page where instead of Web Chat being the primary app, the Web Chat component is nested in a minimizable area of the DOM. This is a popular feature for Web Chat users, where the bot is an accessory to the website, not the main feature.

## How to run locally

- Fork this repository
- Navigate to `project location` in command line
- Run `npm install`
- Run `npm start`
- Browse to [http://localhost:3000/](http://localhost:3000/)

# To Start Bot Service in the web-chat-bot locally

Start the bot project using `npm start`

## Start offline-directline

Unofficial package to emulate the bot framework connector locally.

### Set up your direct line connector from the command line

```sh
npm install offline-directline -g
```

Then simply use the "directline" command with the endpoint where you want to host offline-directline and the endpoint where your bot is hosted

```sh
directline -d 3000 -b "http://127.0.0.1:3978/api/messages"
```
