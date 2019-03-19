(function () {

    'use strict';

    angular.module('app', [
        'ui.grid',
        'ui.grid.pagination',
        'ui.bootstrap',
    ]).controller('testController', testController);

    function testController($scope, $http) {
        var vm = this;
        vm.sort = [];

        vm.getData = getData;
        vm.gridData = gridData;
        vm.pageChanged = pageChanged;
        vm.sortChange = sortChange;

        vm.pagination = {
            paginationPageSize: 5,
            pageNumber: 1
        };

        active();

        function active() {
            getData();
        }


        vm.gridOptions = {
            paginationPageSize: 5,
            enablePaginationControls: false,
            useExternalPagination: true,
            useExternalSorting: true,
            onRegisterApi: vm.gridData,
        };

        vm.gridOptions.columnDefs = [
            {name: 'id'},
            {name: 'first_name'},
            {name: 'last_name'},
            {name: 'type'}
        ];

        function gridData(gridApi) {
            vm.gridApi = gridApi;
            vm.pageChanged();
            vm.sortChange();
        }

        function pageChanged() {
            vm.gridApi.pagination.on.paginationChanged($scope, function (pageNumber, pageSize) {
                vm.pagination.pageNumber = pageNumber;
                vm.pagination.paginationPageSize = pageSize;
                vm.getData();
            });
        }

        function sortChange() {
            vm.gridApi.core.on.sortChanged($scope, function (grid, sortColumns) {
                vm.sort = [];
                vm.gridApi.pagination.seek(1);
                angular.forEach(sortColumns, function (value) {
                    vm.sort.push({'column': value.field, 'direction': value.sort.direction});
                });
                vm.getData();
            });
        }


        function getData() {
            var parameters = {"pagination": vm.pagination, "sort": vm.sort};
            $http.get('/api/getJson', {params: parameters}).then(function (data) {
                vm.gridOptions.data = data.data.data;
                vm.gridOptions.length = data.data.length;
            })
        }
    }

})();