'use strict';

describe('Service: CustomTemplateCaching', function () {

  // load the service's module
  beforeEach(module('testappApp'));

  // instantiate service
  var CustomTemplateCaching;
  beforeEach(inject(function (_CustomTemplateCaching_) {
    CustomTemplateCaching = _CustomTemplateCaching_;
  }));

  it('should do something', function () {
    expect(!!CustomTemplateCaching).toBe(true);
  });

});
