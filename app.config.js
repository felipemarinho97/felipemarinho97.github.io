angular.module('felipe', ['ngRoute'])

 .config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'resumo.html'
    })
    .when('/ConsultaUP', {
      templateUrl: 'works/consulta-up-template.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});