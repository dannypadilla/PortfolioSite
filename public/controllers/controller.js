
var myApp = angular.module("myApp", [] );

myApp.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Hello controller");

    var refresh = function() {
	$http.get("/portfolio").success(function(response) {
	    console.log("I got the data I requested");
	    $scope.portfolio = response;
	    $scope.entry = ""; // clear input boxes
	    
	});
    };
    refresh();

    $scope.addEdu = function() {
	console.log($scope.entry);
	$scope.entry.type = "edu";
	$http.post("/portfolio", $scope.entry).success(function(response) {
	    console.log(response);
	    refresh();
	});
    };

    $scope.addSkill = function() {
	console.log($scope.entry);
	$scope.entry.type = "skill";
	$http.post("/portfolio", $scope.entry).success(function(response) {
	    console.log(response);
	    refresh();
	});
    };

    $scope.addProject = function() {
	console.log($scope.entry);
	$scope.entry.item = "project";
	$http.post("/portfolio", $scope.entry).success(function(response) {
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
	    $scope.entry = response; // put response in input boxes 
	});
    };

    $scope.update = function(id) {
	console.log($scope.entry._id);
	$http.put("/portfolio/" + $scope.entry._id, $scope.entry).success(function(response) {
	    refresh();
	});
    };

    $scope.deselect = function() {
	$scope.entry = "";
    };

}]);