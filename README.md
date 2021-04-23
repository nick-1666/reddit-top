# reddit-top

## Install

[![NPM](https://nodei.co/npm/reddit-top.png?mini=true)](https://nodei.co/npm/reddit-top/)

## Usage

```js
const redditTop = require("reddit-top");

redditTop.setSub("memes");
// Sets the subreddit to fech the top daily post of.
// By default if not set, it will default to r/all

redditTop.getImage();
// Returns the image url of the top post
redditTop.getTitle();
// Returns the title of the top post
redditTop.getOP();
// Returns the op of the top post
redditTop.getKarma();
// Returns the karma of the top post
```
