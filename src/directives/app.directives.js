(function (app) {

    app.filter('customCurrency', function () {

        return function (input) {
            console.log(input)

            return input
        }
    });

})(app);