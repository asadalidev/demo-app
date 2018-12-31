(function (app) {

    let controllerName = 'home';

    let template = `
    <page-title></page-title>
<button class="btn btn-md btn-primary" ng-click="edit()">Edit Student</button>
        `;


    let controller = ['$scope', '$state', function ($scope, $state) {

        $scope.edit = () => $state.go('studentsEdit', {
            id: 1
        })
    }];



    app.component(controllerName, {
        template,
        controller
    });

})(app);