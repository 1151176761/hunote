angular.module('xiangmuApp') .controller("ziji",["$scope","$http","$cookies","$state",function ($scope,$http,$cookies,$state){
  $http({
    url:"http://www.somenote.cn:1510/item",
    method:"get"
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
  var num=0;
  $http({
    url:'http://www.somenote.cn:1510/item',
    method:"GET",
    params:{"$skip":num,"$limit":3}
  }).success(function(e){
    $scope.data=e
  });

  $scope.next=function(){
    num+=3;
    $http({
      url:'http://www.somenote.cn:1510/item',
      method:"GET",
      params:{"$skip":num,"$limit":3}
    }).success(function(e){
      $scope.data=e
    })
  }
  $scope.shang=function(){
    num-=3;
    $http({
      url:'http://www.somenote.cn:1510/item',
      method:"GET",
      params:{"$skip":num,"$limit":3}
    }).success(function(e){
      $scope.data=e
    })
  }

  $scope.tuichu=function(){
    $cookies.remove("username")
    $cookies.remove("password")
    $state.go("dengl");
  }
}])
