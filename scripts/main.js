angular.module("advanced-grid", ["ngRoute",'ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.importer', 'ui.grid.grouping']);

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
    });