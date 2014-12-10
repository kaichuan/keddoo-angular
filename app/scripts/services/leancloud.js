'use strict';

/**
 * @ngdoc service
 * @name keddooAngularApp.leancloud
 * @description
 * # leancloud
 * Service in the keddooAngularApp.
 */
angular.module('keddooAngularApp')
    .factory('Leancloud', ['$window', function leancloud($window) {
	$window.AV.initialize('6uqi4mc0um7pg8m9xoky8ra2gd8wu62yhby5m5yrrfwdhdbe', '5tdgizikpqxiv543jz08o989q0u2uvtxo98p09pky8wua8ae');
	return $window.AV;
    }]);

