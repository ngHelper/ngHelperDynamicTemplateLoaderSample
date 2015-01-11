'use strict';

angular.module('testappApp').service('CustomTemplateCaching', ['envDeployment', function(envDeployment) {
  var self = this;

  self.processRequest = function(requestConfig) {
    if (requestConfig.url.indexOf('?') === -1) {
      requestConfig.url = requestConfig.url + '?v=' + envDeployment.deploymentUUID;
    } else {
      requestConfig.url = requestConfig.url + '&v=' + envDeployment.deploymentUUID;
    }
    return requestConfig;
  };
}]);
