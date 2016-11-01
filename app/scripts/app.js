'use strict';
/**
 * @ngdoc overview
 * @name xiangmuApp
 * @description
 * # xiangmuApp
 *
 * Main module of the application.
 */
angular
  .module('xiangmuApp', ["ui.router","ngCookies"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
    $stateProvider.state("dengl",{
      url:"/dengl",
        templateUrl: "views/dengl.html",
        controller: "dengl"
    }).state("zhuce",{
      url:"/zhuce",
      templateUrl:"views/zhuce.html",
      controller:"zhuce"
    }).state("daohang",{
      url:"/daohang",
      templateUrl:"views/daohang.html",
      controller:"daohang"
    }).state("a",{
        url:"/a",
        templateUrl:"views/a.html",
        controller:"a"
    }).state("ziji",{
      url:"/ziji",
      templateUrl:"views/ziji.html",
      controller:"ziji"
    }).state("b",{
      url:"/b",
      templateUrl:"views/b.html",
      controller:"b"
    })

    $urlRouterProvider.when('','/dengl')
  }])
