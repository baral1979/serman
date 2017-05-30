'use strict';

//Directive used to set metisMenu and minimalize button
angular.module('serman')
  .directive('sideNavigation', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        // Call metsi to build when user signup
        scope.$watch('authentication.user', function() {
          $timeout(function() {
            element.metisMenu();
          });
        });

        // Colapse menu in mobile mode after click on element
        var menuElement = angular.element('#side-menu a:not([href$="\\#"])');
        menuElement.click(function() {
          if (angular.element(window).width() < 769) {
            angular.element("body").toggleClass("mini-navbar");
          }
        });

        // Enable initial fixed sidebar
        if (angular.element("body").hasClass('fixed-sidebar')) {
          var sidebar = element.parent();
          sidebar.slimScroll({
            height: '100%',
            railOpacity: 0.9
          });
        }

      }
    };
  })
  .directive('switch', function() {
    return {
      scope: {
        toggle: '=',
        action: '='
      },
      template: '<i ng-class="{\'fa\':true, \'fa-toggle-on\':toggle, \'fa-toggle-off\':!toggle}"></i>',
      replace: true
    }
  })
  .directive('loader', function() {
    return {
      scope: {
        working: '='
      },
      template: '<div ng-show="working" class="sk-spinner sk-spinner-double-bounce"><div class="sk-double-bounce1"></div><div class="sk-double-bounce2"></div></div>',
      replace: true
    }
  })
  .directive('minimalizaSidebar', function($timeout) {
    return {
      restrict: 'A',
      template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
      controller: function($scope) {
        $scope.minimalize = function() {
          angular.element('body').toggleClass('mini-navbar');
          if (!angular.element('body').hasClass('mini-navbar') || angular.element('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            angular.element('#side-menu').hide();
            // For smoothly turn on menu
            $timeout(function() {
              angular.element('#side-menu').fadeIn(400);
            }, 200);
          } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            angular.element('#side-menu').removeAttr('style');
          }
        };
      }
    };
  });
