'use strict';

/**
 * @ngdoc function
 * @name ccDashboardFrontendApp.controller:EditstoreCtrl
 * @description
 * # EditstoreCtrl
 * Controller of the ccDashboardFrontendApp
 */
angular.module('ccDashboardFrontendApp')
  .controller('EditstoreCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.storeID = $routeParams.storeID;

    $scope.save = function(){
    	alert('EditstoreCtrl - save function');
    }
  });
