
var myApp = angular.module("myApp", [] );

myApp.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Helloz");

    var refresh = function() {
	$http.get("/contactList").success(function(response) {
	    console.log("I got the data I requested");
	    $scope.contactList = response;
	    $scope.contact = "";  // clear input boxes
	});
    };

    refresh();

    $scope.addContact = function() {
	console.log($scope.contact);
	$http.post("/contactList", $scope.contact).success(function(response) {
	    console.log(response);
	    refresh();
	});
    };

}]);