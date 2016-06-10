angular.module("advanced-grid")
.controller("LoginController", ["$scope","$location", function($scope, $location){
        $scope.name = "login page";
        $scope.isError = false;
        $scope.signIn = function(){
            if($scope.email == "maheshtheapex@gmail.com" && $scope.password == "1234"){
                $location.url("/grid");
            } else {
                $scope.isError = true;
            }

        };
    }]);