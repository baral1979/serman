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
      vm.selectedService = groups[0].services[0];
    }

    Services.getServices().then(function (response) {
      prepareData(response.data);
    });
    //prepareData(Services.getServices());
    var vm = this;

    vm.userName = Services.getServices();
    vm.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

    $scope.startStop  = function (service, action) {
      if (!action) {
        console.log('no action');
        action = service.Status === 'Running' ? 2 : 1
      } else console.log('action', action);


      service.wip = true;
      service.wipaction = action === 1 ? 'Starting...' : 'Stopping...';
      Services.submitAction({
          ServiceName: service.Name,
          Action: action
      }).then(function (response) {
        service.Status = response.data;
        service.wip = false;
        service.wipaction = "";
      });
    }


    $scope.startGroup = function (group) {
        for (var i = 0; i < group.services.length; i++) {
          $scope.startStop(group.services[i], 1);
        }
    }

    $scope.stopGroup = function (group) {
        for (var i = 0; i < group.services.length; i++) {
          $scope.startStop(group.services[i], 2);
        }
    }
  }]);
