'use strict';

/**
 * @ngdoc function
 * @name testappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testappApp
 */
angular.module('testappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
