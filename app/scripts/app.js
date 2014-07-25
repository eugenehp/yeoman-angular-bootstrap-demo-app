'use strict';

/**
 * @ngdoc overview
 * @name ccDashboardFrontendApp
 * @description
 * # ccDashboardFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('ccDashboardFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/stores.html',
        controller: 'StoresCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/stores', {
        templateUrl: 'views/stores.html',
        controller: 'StoresCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/stores/add', {
        templateUrl: 'views/addstore.html',
        controller: 'AddstoreCtrl'
      })
      .when('/stores/edit/:storeID', {
        templateUrl: 'views/editstore.html',
        controller: 'EditstoreCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
