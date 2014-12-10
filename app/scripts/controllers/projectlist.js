'use strict';

/**
 * @ngdoc function
 * @name keddooAngularApp.controller:ProjectListCtrl
 * @description
 * # ProjectListCtrl
 * Controller of the keddooAngularApp
 */
angular.module('keddooAngularApp')
    .controller('ProjectListCtrl', ['$scope', 'Leancloud', function ($scope, AV) {
	$scope.title = 'hello';
	var query = new AV.Query('Project');
	query.equalTo('status', 'fundRaising');
	query.find().then(function(projects){
	    console.log(projects[0]);
	});

  }]);
