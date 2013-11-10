'use strict';

angular.module('easy.filters.default', [])
  .filter('default', function() {
    return function(text) {
      return text;
    }
  });
