(function (angular) {

    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/')

        $stateProvider
            .state('home', {
                url: '/',
                title: 'Home',
                template: '<home />'
            })
            .state('students', {
                url: '/students',
                title: 'Students',
                template: '<students-list />'
            })
            .state('studentsEdit', {
                url: '/students/{id:[0-2]}',
                title: 'Edit Student',
                template: '<students-edit />',
                data: {
                    name: 'asad'
                }
            })
            .state('studentsAdd', {
                url: '/students/add',
                title: 'Add Student',
                template: '<students-add />'
            });

    }]);

})(angular);