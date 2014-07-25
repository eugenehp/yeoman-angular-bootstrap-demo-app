'use strict';

/**
 * @ngdoc function
 * @name ccDashboardFrontendApp.controller:StoresCtrl
 * @description
 * # StoresCtrl
 * Controller of the ccDashboardFrontendApp
 */
angular.module('ccDashboardFrontendApp')
  .controller('StoresCtrl', function ($scope,$modal) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.stores = [
    {
    	id:'001',
    	name:'My Store',
      adminpanel: 'http://localhost/admin/001',
      frontstore: 'http://localhost/frontstore/001'
    },{
    	id:'003',
    	name:'My Awesome Store',
      adminpanel: 'http://localhost/admin/003',
      frontstore: 'http://localhost/frontstore/003'
    },{
    	id:'004',
    	name:'A New Store',
      adminpanel: 'http://localhost/admin/004',
      frontstore: 'http://localhost/frontstore/004'
    }
    ];

    $scope.delete = function(index){
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: ModalInstanceCtrl,
        size: 'sm',
        resolve: {
          store: function () {
            return $scope.stores[index];
          }
        }
      });

      modalInstance.result.then(function (shouldDelete) {
        if(shouldDelete)
          alert('delete');
        else
          alert('do not delete');
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }
  });


var ModalInstanceCtrl = function ($scope, $modalInstance, store) {

  $scope.store = store;

  $scope.ok = function () {
    // $modalInstance.dismiss('cancel');
    $modalInstance.close(true);
  };

  $scope.cancel = function () {
    // $modalInstance.dismiss('cancel');
    $modalInstance.close(false);
  };
};