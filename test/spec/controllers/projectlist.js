'use strict';

describe('Controller: ProjectlistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('keddooAngularApp'));

  var ProjectlistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectlistctrlCtrl = $controller('ProjectlistctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
