
var myApp = angular.module("myApp", [] );

myApp.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Helloz");

    $http.get("/contactList").success(function(response) {
	console.log("I got the data I requested");
	$scope.contactList = response;
    });

    $scope.addContact = function() {
	console.log($scope.contact);
	$http.post("/contactList", $scope.contact);
    };

}]);