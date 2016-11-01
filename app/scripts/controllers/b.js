angular.module('xiangmuApp').controller("b",["$scope","$http","$state","$cookies",function ($scope,$http,$state,$cookies) {
  $scope.tian=function(){
    $http({
      url:"http://www.somenote.cn:1510/item",
      method:"POST",
      data:$scope.adata
    }).success(function(e){
      $state.go("ziji")
      $scope.data.push($scope.adata)
    })
  }
  $scope.tuichu=function(){
    $cookies.remove("username")
    $cookies.remove("password")
    $state.go("dengl");
  }
}])
//<script type="text/babel">
//var Title=React.createClass({
//   render:function(){
//     return <h1>{this.props.t}<small>{this.props.data}</small></h1>
//   }
//})
//ReactDOM.render(<Title t="qq" data="qqq"/>,document.getElementById("a"))
//</script>
