angular.module("advanced-grid")
    .controller("ItemsGridController", ['$scope', '$http', '$timeout', '$interval', 'uiGridConstants', 'uiGridGroupingConstants',
        function ($scope, $http, $timeout, $interval, uiGridConstants, uiGridGroupingConstants) {
                $scope.isSelectedRow = false;
                $scope.gridOptions = {};
                $scope.gridOptions.data = 'myData';
                $scope.gridOptions.enableColumnResizing = true;
                $scope.gridOptions.enableFiltering = false;
                $scope.gridOptions.enableGridMenu = true;
                $scope.gridOptions.showGridFooter = false;
                $scope.gridOptions.multiSelect = false;
                $scope.gridOptions.showColumnFooter = false;
                $scope.gridOptions.fastWatch = true;


            $scope.gridOptions.onRegisterApi = function(gridApi){
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope,function(row){
                    console.log(row);
                    $scope.selectedRow = gridApi.selection.getSelectedRows();
                    //$scope.grid2Options.data = $scope.selectedRow.entity
                    if($scope.selectedRow.length){
                        $scope.isSelectedRow = true;
                    } else {
                        $scope.isSelectedRow = false;
                    }
                });
            };

                $scope.gridOptions.columnDefs = [
                    { name:'id', width:50 },
                    { name:'name', width:100 },
                    { name:'age', width:100, enableCellEdit: true, aggregationType:uiGridConstants.aggregationTypes.avg, treeAggregationType: uiGridGroupingConstants.aggregation.AVG },
                    { name:'address.street', width:150, enableCellEdit: true },
                    { name:'address.city', width:150, enableCellEdit: true },
                    { name:'address.state', width:50, enableCellEdit: true },
                    { name:'address.zip', width:50, enableCellEdit: true },
                    { name:'company', width:100, enableCellEdit: true },
                    { name:'email', width:100, enableCellEdit: true },
                    { name:'phone', width:200, enableCellEdit: true },
                    { name:'about', width:300, enableCellEdit: true },
                    { name:'friends[0].name', displayName:'1st friend', width:150, enableCellEdit: true },
                    { name:'friends[1].name', displayName:'2nd friend', width:150, enableCellEdit: true },
                    { name:'friends[2].name', displayName:'3rd friend', width:150, enableCellEdit: true },
                    { name:'agetemplate',field:'age', width:150, cellTemplate: '<div class="ui-grid-cell-contents"><span>Age 2:{{COL_FIELD}}</span></div>' },
                    { name:'Is Active',field:'isActive', width:150, type:'boolean' },
                    { name:'Join Date',field:'registered', cellFilter:'date', width:150, type:'date', enableFiltering:false },
                    { name:'Month Joined',field:'registered', cellFilter: 'date:"MMMM"', filterCellFiltered:true, sortCellFiltered:true, width:150, type:'date' }
                ];

            $scope.addRow = function(){
                $scope.myData.unshift({});
            };

                var i = 0;
                $scope.refreshData = function(){
                    $scope.myData = [];

                   $http.get('scripts/items.json')
                            .success(function(data) {
                                data.forEach(function(row){
                                    row.id = i;
                                    i++;
                                    row.registered = new Date(row.registered)
                                    $scope.myData.push(row);
                                });
                            })
                            .error(function(error) {
                               console.log(error);
                            });

                };
            $scope.refreshData();
            $scope.grid2Options = {
                enableColumnResizing: true
            };
            $scope.grid3Options = {
                enableColumnResizing: true
            };
    }]);