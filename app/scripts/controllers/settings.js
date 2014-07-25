'use strict';

/**
 * @ngdoc function
 * @name ccDashboardFrontendApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the ccDashboardFrontendApp
 */
angular.module('ccDashboardFrontendApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


	$scope.inputAccessKey = "Access Key";
	$scope.inputSecretKey = "Secret Key";
	$scope.inputUS = "US Associate Tag";
	$scope.inputUK = "UK Associate Tag";
	$scope.inputCanada = "Associate Tag";
	$scope.inputDE = "DE Associate Tag";
	$scope.inputFR = "FR Associate Tag";
	$scope.inputJP = "JP Associate Tag";
	$scope.inputIT = "IT Associate Tag";
	$scope.inputCN = "CN Associate Tag";
	$scope.inputES = "ES Associate Tag";
	$scope.inputIN = "IN Associate Tag";

	$scope.save = function(){
		alert($scope.inputAccessKey + ', ' + $scope.inputIN);
	}

  });
