'use strict';

/**
 * @ngdoc function
 * @name keddooAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the keddooAngularApp
 */
angular.module('keddooAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
