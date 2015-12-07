angular.module("web-dict").run(function ($rootScope, $state) {
  //$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
  //  // We can catch the error thrown when the $requireUser promise is rejected
  //  // and redirect the user back to the main page
  //  if (error === 'AUTH_REQUIRED') {
  //    $state.go('vocabularies');
  //  }
  //});
});

angular.module("web-dict").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('dictionary', {
      url: '/dictionary/:word',
      templateUrl: 'client/vocabularies/views/vocabularies-list.ng.html',
      controller: 'MainController'
      //resolve: function(){}
    });
    //.state('dictionaryWord', {
    //  url: '/dictionary/:word',
    //  templateUrl: 'client/vocabularies/views/vocabulary-details.ng.html',
    //  controller: 'MainController'
    //  //resolve: {
    //  //  "currentUser": function ($meteor) {
    //  //    //return $meteor.requireUser();
    //  //  }
    //  //}
    //});

  $urlRouterProvider.otherwise("/dictionary");
});