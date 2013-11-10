'use strict';

app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html'
    })
});

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
  RestangularProvider.setDefaultHttpFields({});
});

app.run(function(Angularytics) {
  Angularytics.init();
})

app.run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

});


