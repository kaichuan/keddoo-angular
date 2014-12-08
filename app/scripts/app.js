'use strict';

/**
 * @ngdoc overview
 * @name keddooAngularApp
 * @description
 * # keddooAngularApp
 *
 * Main module of the application.
 */
angular
  .module('keddooAngularApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
