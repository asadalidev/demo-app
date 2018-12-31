(function (app) {

    let controllerName = 'studentsAdd';

    let template = `
    <page-title />

        `;


    let controller = ['$scope', function ($scope) {}];



    app.component(controllerName, {
        template,
        controller
    });

})(app);