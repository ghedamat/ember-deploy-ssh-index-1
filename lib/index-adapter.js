var CoreObject  = require('core-object');
var RSVP        = require('rsvp');
var chalk       = require('chalk');

var red   = chalk.red;
var green = chalk.green;
var white = chalk.white;

module.exports = CoreObject.extend({
  upload: function (indexHtml) {
    var that = this;
    var key = that.taggingAdapter.createTag();
    var value = indexHtml.toString().replace(/\n/g, '');

    return new RSVP.Promise (function (resolve, reject) {
      that.ui.writeLine(red('Upload not implemented :('));
      that.ui.writeLine(green('SSH, rails c, then copy/paste this for now:'));
      that.ui.writeLine("$redis.set('" + key + "', '" + value + "')");

      resolve('TODO: #upload' + indexHtml);
    });
  },
  activate: function (revisionToActivate) {
    return new RSVP.Promise (function (resolve, reject) {
      resolve('TODO: #activate' + revisionToActivate);
    });
  },
  list: function () {
    return new RSVP.Promise (function (resolve, reject) {
      resolve('TODO: #list');
    });
  }
});
