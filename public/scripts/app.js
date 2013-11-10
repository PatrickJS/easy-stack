'use strict';

/* Your Easy app */
angular.module('easyApp', [
  'easy.filters',
  'easy.services',
  'easy.directives',
  'easy.controllers',
  'easy.modules'
]);

// Controllers
angular.module('easy.controllers', [
  'easy.controllers.main'
]);

// Directives
angular.module('easy.directives', [
  'easy.directives.default'
]);

// Filters
angular.module('easy.filters', [
  'easy.filters.default'
]);

// Services
angular.module('easy.services', [
  'easy.services.default'
]);

// Modules
angular.module('easy.modules', [
  'ui.router',
  'ngAnimate',
  'restangular',
  'angularytics',
  'angular-raven',
  'easy.modules.default'
]);
