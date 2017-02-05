/**
 * @ngdoc function
 * @name ikya.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * @author Anand Tiwari <anandtiwari192@gmail.com>
 * Controller of the ikya used in view state
 */
angular.module('ikya.controllers')
  .controller('ViewCtrl', [ '$scope','$rootScope','ViewService', '$timeout', '$state', '$log', '$http','$q','$sce', '$filter',function ($scope, $rootScope,ViewService, $timeout, $state, $log,$http,$q,$sce, $filter) {
  	'use strict';

    var init =  function(){
        ViewService.getEventList().then(function(response){
            $scope.event_list = response.data['event_list'];
            $scope.extra = response.data['extra'];
        });   
    }

    $scope.setting = false;
    $scope.bottom = true;
    $scope.shrinkVal = 150;

    $scope.delete = function(item){
        ViewService.updateEventList({'item':item}).then(function(response){
            $scope.event_list = response['event_list'];
            $scope.extra = response['extra'];
        });
    };

    $scope.formatDate = function(item){
            var d = new Date();
            var diff = d.valueOf() - new Date(item).valueOf();
            var diffInHours = diff/1000/60/60;
            var diffInMinute = diff/1000/60;
            var diffInSeconds = diff/1000;
            var value;
            if( diffInSeconds < 60)
                value = "just now";
            else if(diffInMinute<60)
                value = diffInMinute + "minutes ago";
            else if(diffInHours<24)
                value = diffInMinute + "hours ago";
            else
                value = $filter('date')(item, 'dd MMM yyyy');
            return value;
    };

    $scope.logout = function(){
        $state.go('login');
    }

    init();
}]);