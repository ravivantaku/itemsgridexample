angular.module("advanced-grid", ["ngRoute"]);

angular.module("advanced-grid")
.config(function($routeProvider){
        $routeProvider
            .when("/", {
                url: "/",
                templateUrl: "templates/login.html",
                controller: "LoginController"
            })
            .when("/grid", {
                url:"/grid",
                templateUrl: "templates/itemsGrid.html",
                controller: "ItemsGridController",
                controllerAs: "itemsGrid"
            })
            .otherwise("/");
    })