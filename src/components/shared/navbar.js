(function (app) {

    let controllerName = 'navBar';

    let template = require('./navbar.html')

    let controller = ['$scope', function ($scope) {

        $scope.isActive = (route) => '';

    }];



    app.component(controllerName, {
        template,
        controller,
        bindings: {
            title: '@'
        }
    });

})(app);