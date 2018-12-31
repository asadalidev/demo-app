window.app = angular.module('app', ['ui.router']);

app.run(['$rootScope', '$transitions', function ($rootScope, $transitions) {

    $transitions.onSuccess({}, function (transition) {
        // console.log(transition.$from())
        // console.log(transition.$to())
        // console.log(transition.params())

        document.title = transition.$to().self.title;
    })

}]);


require('./constants/app.constants');
require('./directives/app.directives');
require('./routes/app.routes');
require('./components/app.components');