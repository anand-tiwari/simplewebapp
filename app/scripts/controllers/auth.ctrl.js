/**
 * @name ikya.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * @author Anand Tiwari <anandtiwari192@gmail.com>
 * Controller of the ikya used in login state
 */
angular.module('ikya.controllers')
  .controller('AuthCtrl', ['$scope', 'AuthService','$state','$rootScope', function ($scope, AuthService, $state,$rootScope) {
  	'use strict';
    function init(){
        $scope.userName = 'anandtiwari192@gmail.com';
        $scope.passWord = 'Welcome1';
    }

    $scope.login = function(){
        // AuthService.signIn($scope.userName,$scope.passWord);
        $state.go('view');
    }

    $scope.logout = function(){
      $state.go('login');
    }

  	init();
  }]);
  