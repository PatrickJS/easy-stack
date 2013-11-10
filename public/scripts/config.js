'use strict';

angular.module('easyApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })
  })

  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })

  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/1');
    RestangularProvider.setDefaultHttpFields({
      cache: false,
      withCredentials: true
    });
  })

  .config(function(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['Console', 'Google']);
  })
  .run(function(Angularytics) {
    Angularytics.init();
  })

  .run(function($rootScope, $location, $anchorScroll, $stateParams, $log) {
    $rootScope.$log = $log;
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $location.hash($stateParams.scrollTo);
      $anchorScroll();
    });
  });


