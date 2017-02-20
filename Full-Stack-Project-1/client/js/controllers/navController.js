myApp.controller('navController', ['$scope', '$location', ($scope, $location) => {
	$scope.isActive = destination => {
		return destination === $location.path();
	}
}]);