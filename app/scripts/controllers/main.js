'use strict';

/**
 * @ngdoc function
 * @name testappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testappApp
 */
angular.module('testappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
