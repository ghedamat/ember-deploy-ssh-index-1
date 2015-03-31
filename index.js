/* jshint node: true */
'use strict';
 
var IndexAdapter = require('./lib/index-adapter');
 
function EmberDeploySshIndex() {
  this.name = 'ember-deploy-ssh-index';
  this.type = 'ember-deploy-addon';
 
  this.adapters = {
    index: {
      'ssh': IndexAdapter
    }
  };
}
 
module.exports = EmberDeploySshIndex;
