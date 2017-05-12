(function() {
  'use strict';

  angular
    .module('serman')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.services', {
        url: "/services",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Example view' }
      });



    $urlRouterProvider.otherwise('/index/services');
  }

})();
