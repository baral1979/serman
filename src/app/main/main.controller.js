'use strict';

angular.module('serman')
  .controller('ServiceController', ['$scope', 'Services', function($scope, Services) {

    function prepareData(data) {
      var groups = [];

      data.map(function(service) {

        var group = groups.filter(function(g) {
          return g.name === service.Group;
        });

        if (group.length === 0) {
          group = {
            name: service.Group,
            color: service.GroupColor,
            services: []
          };
          groups.push(group);
        } else group = group[0];

        group.services.push(service);



      });


      $scope.serviceGroups = groups;
    }
    prepareData(Services.getServices());
    var vm = this;

    vm.userName = Services.getServices();
    vm.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  }]);
