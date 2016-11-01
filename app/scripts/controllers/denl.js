angular.module('xiangmuApp') .controller("dengl",["$scope","$http","$cookies","$state","$cookieStore",function ($scope,$http,$cookies,$state,$cookieStore){
  var yong=$cookies.get("username")
  $scope.updata={
    username:yong
  }
    if(($cookies.get('username',$scope.updata))&&($cookies.get('password',$scope.updata))){
      window.location.href="index.html#/daohang"
    }
    $scope.sub=function(){
            $http({
                url: "http://www.somenote.cn:1510/users/login",
                method:"POST",
                withCredentials:true,
                data:$scope.updata
            }).success(function(e){
                $state.go("daohang");
              if($scope.check==true){
              $cookieStore.put('username',$scope.updata);
              $cookieStore.put('password',$scope.updata);
              var date = new Date();
                date.setDate(date.getDate()+3);
                $cookies.put("username",$scope.updata.username,{"expires":date});
                $cookies.put("password",$scope.updata.password,{"expires":date});
                $cookies.put("uid",e.uid,{"expires":date});
                //console.log(e)
                window.location.href="index.html#/daohang"
              }
            }).error(function(e){
                alert("重新登录")
            })
       }
}])
//else{
//  $http({
//    url: "http://www.somenote.cn:1510/users/login",
//    method:"POST",
//    withCredentials:true,
//    data:$scope.updata
//  }).success(function(e){
//    $state.go("daohang");
//    $cookies.put("username",$scope.updata.username);
//    $cookies.put("password",$scope.updata.password);
//    $cookies.put("uid",e.uid);
//    console.log(e)
//  }).error(function(e){
//    alert("重新登录")
//  })
//}
