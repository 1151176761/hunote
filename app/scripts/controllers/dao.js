angular.module('xiangmuApp') .controller("daohang",["$scope","$http","$cookies","$state",function ($scope,$http,$cookies,$state){
  var uid=$cookies.get("uid")
  $http({
    url:"http://www.somenote.cn:1510/item",
    method:"get",
    params:{"uid":uid}
  }).success(function(e){
    $scope.data=e
  })
  $scope.editSave=function(){
    $http({
      url:"http://www.somenote.cn:1510/item/"+$scope.editData.id,
      method:"PUT",
      data:$scope.editData
    }).success(function(){
    })
  }
  $scope.edit=function(e){
    $scope.editData=e
  }
  $scope.w=""
  $scope.del=function(e){
    $http({
      url:"http://www.somenote.cn:1510/item/"+e.id,
      method:"delete"
    }).success(function(){
      alert("确定要删除吗？")
      $scope.data.splice($scope.data.indexOf(e),1)
    })
  }

  $scope.tuichu=function(){
    $cookies.remove("username")
    $cookies.remove("password")
    $cookies.remove("uid")
    $state.go("dengl");
  }
}])
