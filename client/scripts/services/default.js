'use strict';

services.provider('default', function() {
  var _development = null;
  this.development = function(config) {
    _development = config || null;
    return this;
  };

  this.$get = function() {

  };

});
