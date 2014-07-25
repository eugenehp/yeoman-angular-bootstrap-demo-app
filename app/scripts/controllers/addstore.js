'use strict';

/**
 * @ngdoc function
 * @name ccDashboardFrontendApp.controller:AddstoreCtrl
 * @description
 * # AddstoreCtrl
 * Controller of the ccDashboardFrontendApp
 */
angular.module('ccDashboardFrontendApp')
  .controller('AddstoreCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = "Title";
    $scope.URL = "http://eugenehp.tk";

    $scope.save = function(){
    	alert($scope.title+', '+$scope.URL)
    }
  });
