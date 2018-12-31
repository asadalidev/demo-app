(function (app) {

    let controllerName = 'studentsList';

    let template = `
    <page-title></page-title>


    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="student in students">
      <th scope="row">{{student.id}}</th>
      <td>{{student.name}}</td>
    </tr>
  </tbody>
</table>

        `;


    let controller = ['$scope', '$http', function ($scope, $http) {
        $http.get('http://localhost:3000/api/students').then(function (res) {
            $scope.students = res.data;
        })
    }];



    app.component(controllerName, {
        template,
        controller
    });

})(app);