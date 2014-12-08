'use strict';

/**
 * @ngdoc function
 * @name keddooAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the keddooAngularApp
 */
angular.module('keddooAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
