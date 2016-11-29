
var myApp = angular.module("myApp", [] );

myApp.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Hello controller");

    var refresh = function() {
	$http.get("/portfolio").success(function(response) {
	    console.log("I got the data I requested");
	    $scope.portfolio = response;
	});
    };
    refresh();

    $scope.addEntry = function() {
	console.log($scope.portfolio);
	$http.post("/portfolio", $scope.portfolio).success(function(response) {
	    console.log(response);
	    refresh();
	});
    };

    $scope.remove = function(id) {
	console.log(id);
	$http.delete("/portfolio/" + id).success(function(response) {
	    refresh();
	});
    };

    $scope.edit = function(id) {
	console.log(id);
	$http.get("/portfolio/" + id).success( function(response) {
	    $scope.portfolio = response; // put response in input boxes 
	});
    };

    $scope.update = function(id) {
	console.log($scope.portfolio._id);
	$http.put("/portfolio/" + $scope.portfolio._id, $scope.portfolio).success(function(response) {
	    refresh();
	});
    };


}]);