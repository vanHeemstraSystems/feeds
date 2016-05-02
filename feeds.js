/*
 * feeds.js
 */
var FeedsFeed = require(__dirname+'/feed.js');

/**
 * Create a new Feeds that let users create sub-feeds.
 * @return {Feeds}
 */
function Feeds() { }

/**
 * Create a new FeedsFeed object.
 * @return {FeedsFeed}
 */
Feeds.prototype.feed = function() {
  return new FeedsFeed();
}

module.exports = Feeds;
