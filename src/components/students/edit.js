(function (app) {

    let controllerName = 'studentsEdit';

    let template = `
       <page-title />

        `;


    let controller = ['$scope', '$stateParams', '$state', function ($scope, $SstateParams, $state) {
        console.log($SstateParams)
        console.log($state)
    }];



    app.component(controllerName, {
        template,
        controller,
        replace: true
    });

})(app);