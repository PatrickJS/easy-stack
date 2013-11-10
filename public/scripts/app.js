'use strict';

/* Your Easy app */
angular.module('easyApp', [
  'controllers',
  'directives',
  'filters',
  'services',
  'modules'
]);

// Controllers
angular.module('controllers', []);
// Directives
angular.module('directives', []);

// Filters
angular.module('filters', []);

// Services
angular.module('services', []);

// Modules
angular.module('modules', [
  'ngAnimate',
  'angularytics',
  'restangular',
  'ui.router'
]);



var app = angular.module('easyApp');
var controllers = angular.module('controllers').controller;
var directives = angular.module('directives').directive;
var filters = angular.module('filters').filter;
var services = angular.module('services');
var modules = angular.modules('modules')
