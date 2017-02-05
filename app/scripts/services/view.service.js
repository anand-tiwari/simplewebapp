'use strict';

/**
 *services/view.service.js
 * ===========
 * This service is created to use provide service to view controller.
 *
 * @class ikya.services.ViewService
 * @memberOf ikya.services
 * @author Anand Tiwari <anandtiwari192@gmail.com>
 */
angular.module('ikya.services')
.factory('ViewService', function ($http, Settings, $state, Properties, $log,$q) {
            var data;
            function getApiData(){
                var deferred = $q.defer();
                $http({
                    url:'http://localhost:3002/data.json',
                    method: "GET",
                }).success(function(response, status, headers, config){
                    data = response;
                    deferred.resolve({
                        status: status,
                        data: response
                    });
                }).error(function(response, status, headers, config){
                    deferred.reject({
                        status: status,
                        data: response
                    });
                });      
            return deferred.promise;
            };

            function getData(){
                var deferred = $q.defer();
                deferred.resolve({
                    status: "ok",
                    data: data
                });
                return deferred.promise;
            }

            function getEventList(){
                if (data==undefined){
                    return getApiData();
                }else{
                    return getData();
                }
            }

            function updateEventList(options){
                var index=data.event_list.indexOf(options.item)
                data.event_list.splice(index,1);
                return data;
            }


    return{
        getEventList: getEventList,
        updateEventList: updateEventList,
        getApiData:getApiData
    };

});