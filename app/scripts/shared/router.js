/**
 * @name ikya
 * @description
 * # ikya
 * @author Anand Tiwari <anandtiwari192@gmail.com>
 * Main router of the application.
 */

angular.module('ikya.router', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise("/login");
    
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "app/views/login.html",
      title:'Login',
      controller:"AuthCtrl"
    })
  
    .state('view', {
      url: "/view",
      templateUrl: "app/views/view.html",
      title:'Main View',
      controller:"ViewCtrl"
    })

    .state('about', {
      url: "/about",
      templateUrl: "app/views/about.html",
      title:'About View',
      controller:"MainCtrl"
    })


});