// https://www.youtube.com/watch?v=0nBDoDnAagg&list=PL-TLnxxt_AVFEOlCFBHBG_BbpaF3UX-EU&index=13
// In a node.js environment
//const Parse = require('parse/node');

//browser environment: see public/h5.html...

Parse.initialize("uCecspbtSeNXEA3Irh3VOyV01dg2YfkJBMRcBCnh", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = 'https://ps-heroku.herokuapp.com/parse'

var Post = Parse.Object.extend("Post")
var post = new Post()

post.set("body", "hello my name is dave");
post.set("tags", ["first-post", "welcome"]);
post.set("numComments", 0);

post.save().then(function success(obj){
  console.log("Successfully saved " + post.id);
  var q = new Parse.Query("Post");
  return q.get(post.id);
}).then(function success(object){
  console.log("Successfully got " + post.id);
  post.set("body", "hello my name is dave");
  post.set("numComments", 0);
  return post.save();
}).then(function success(object){
  console.log("Successfully edited " + post.id);
}, function error(obj, err){
  console.error(err);
});
