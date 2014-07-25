'use strict';

describe('Controller: EditstoreCtrl', function () {

  // load the controller's module
  beforeEach(module('ccDashboardFrontendApp'));

  var EditstoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditstoreCtrl = $controller('EditstoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
