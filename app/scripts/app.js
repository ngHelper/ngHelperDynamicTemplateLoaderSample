'use strict';

angular
  .module('testappApp', [
    'app.env',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngHelperDynamicTemplateLoader'
  ])
  .config(function ($routeProvider, $dynamicTemplateLoaderProvider) {

    $dynamicTemplateLoaderProvider.registerInterceptors();

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
  })
  .run([ '$dynamicTemplateLoader', 'CustomTemplateCaching', function($dynamicTemplateLoader, CustomTemplateCaching) {
    $dynamicTemplateLoader.setCachingStrategyService(CustomTemplateCaching);
  }]);

