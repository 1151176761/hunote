﻿angular.module('xiangmuApp') .controller("zhuce",["$scope","$http","$cookies","$state",function ($scope,$http,$cookies,$state){
    $http({
        url:"http://www.somenote.cn:1510/users",
        method:"GET",
        withCredentials:true
    }).success(function(e){
        $scope.zchdata=e
    })
    $scope.zc1=function(e){
        $http({
            url:"http://www.somenote.cn:1510/users",
            method:"POST",
            withCredentials:true,
            data:$scope.hudata
        }).success(function(e){
            $state.go("dengl")
            $cookies.put("username",$scope.hudata.username);
            $scope.zchdata.push(e)
        }).error(function(){
            alert("注册失败")
        })
    }
}])
