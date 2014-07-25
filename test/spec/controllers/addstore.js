'use strict';

describe('Controller: AddstoreCtrl', function () {

  // load the controller's module
  beforeEach(module('ccDashboardFrontendApp'));

  var AddstoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddstoreCtrl = $controller('AddstoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
