<!DOCTYPE html>
<html ng-app="app">

<head>
    <script data-require="angular.js@1.4.8" data-semver="1.4.8" src="https://code.angularjs.org/1.4.8/angular.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" data-semver="0.13.1" data-require="ui-bootstrap@0.13.1" />
    <link data-require="ui-grid@3.0.1" data-semver="3.0.1" rel="stylesheet" href="https://cdn.rawgit.com/angular-ui/bower-ui-grid/v3.0.1/ui-grid.min.css" />
    <script data-require="ui-grid@3.0.1" data-semver="3.0.1" src="https://cdn.rawgit.com/angular-ui/bower-ui-grid/v3.0.1/ui-grid.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.js" data-semver="0.14.3" data-require="ui-bootstrap-tpls@0.14.3"></script>
    <script src="{{asset('new_js/testController.js')}}"></script>
</head>

<body ng-controller="testController as vm">

<div>

    <div id="myGrid" ui-grid="vm.gridOptions" class="grid" ui-grid-pagination></div>
    <uib-pagination total-items="vm.gridOptions.length"
                    ng-model="vm.gridOptions.paginationCurrentPage"
                    items-per-page="vm.gridOptions.paginationPageSize"
                    boundary-links="true"
                    direction-links="true"></uib-pagination>
</div>
</body>

</html>
