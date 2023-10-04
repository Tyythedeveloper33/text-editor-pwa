# PWA Text Editor

![Demo](./Assets/00-demo.gif)

## Table of Contents

- [Introduction](#introduction)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

As you have progressed through this course, you have put together a number of impressive projects that you can show off to potential employers. This project is no exception; in fact, it features some of the most impressive expressions of the concepts you have learned so far.

This is a Progressive Web Application (PWA) text editor that allows you to create and manage notes or code snippets with or without an internet connection. It uses IndexedDB for data persistence, caching, and offline functionality. The application is bundled with Webpack, and it uses Babel to enable async/await functionality. You can also install it as a PWA for quick access.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

## Review
You are required to submit the following for review:

heroku link -  https://peaceful-depths-70206-366d8c1cb5b5.herokuapp.com/


Github Repo - https://github.com/Tyythedeveloper33/text-editor-pwa

## Getting Started
To run the PWA Text Editor locally, follow these steps:

Clone the repository:

shell
Copy code
git clone https://github.com/yourusername/pwa-text-editor.git
Navigate to the project directory:

shell
Copy code
cd pwa-text-editor
Install dependencies:

shell
Copy code
npm install
Start the development server:

shell
Copy code
npm run start
Open your web browser and visit http://localhost:3000 to use the PWA Text Editor.

## Technologies Used
JavaScript
IndexedDB
Webpack
Babel
Workbox
WebpackPwaManifest
Deployment
The application is deployed to Heroku at Live URL.

## Liscense
MIT License

Copyright (c) [2023] [Tyler Webster]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.