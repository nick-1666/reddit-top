const fetch = require("node-fetch");
var sub = "all";
var Response;

fetch("https://api.reddit.com/r/" + sub + "/top.json?sort=top&t=day&limit=1")
  .then(response => response.json())
  .then(response => {
    Response = response;
  });

module.exports = {
  setSub : setSub(),
  getImage : getImage(),
  getTitle : getTitle(),
  getOP : getOP(),
  getKarma : getKarma()
}
function getKarma() {
  return Response.data.children[0].data.score;
}
function setSub(subreddit) {
  sub = subreddit.toString();
}
function getImage() {
  return Response.data.children[0].data.thumbnail;
}
function getTitle() {
  return Response.data.children[0].data.title;
}
function getOP() {
  return Response.data.children[0].data.author;
}