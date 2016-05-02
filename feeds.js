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


// REMOVE ALL BELOW

// /*
//  * Feeds
//  * 
//  * param: database (e.g. 'rethinkdb')
//  */
// module.exports = function(database) {
//   var database = toLowerCase(database);
//   var _Feeds = {};
//   var path = require('../libraries/path');
//   var paths = require('../paths/paths');
//   config = require(path.join(paths.configurations, '/configurations.js'))(database);
//   var common = config.common,
//   server_prefix = common.server_prefix || 'PREFIX';
//   console.log(server_prefix + " - Feeds database required.");
//   _Feeds.database = require('./' + database + '.js');
//   return _Feeds;
// };//does not call itself
