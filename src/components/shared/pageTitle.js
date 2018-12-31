(function (app) {

    let controllerName = 'pageTitle';

    let template = `<h2>{{$ctrl.title}}</h2><hr/>`;

    let controller = ['$state', function ($state) {
        this.title = $state.current.title;
    }];

    app.component(controllerName, {
        template,
        controller
    });

})(app);