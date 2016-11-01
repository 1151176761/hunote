angular.module('xiangmuApp').controller("a",["$scope","$http","$state","$cookies",function ($scope,$http,$state,$cookies) {
	$scope.add=function(){
    var uid=$cookies.get("uid")
    $scope.updata.uid=uid
		$http({
			url:"http://www.somenote.cn:1510/item",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
      $state.go("daohang")
			$scope.data.push($scope.updata)
		})
	}
  $scope.tuichu=function(){
    $cookies.remove("username")
    $cookies.remove("password")
    $cookies.remove("uid")
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
