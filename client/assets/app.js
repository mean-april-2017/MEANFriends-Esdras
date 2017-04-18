var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when("/",{
    templateUrl: "partials/index.html",
    controller: "indexController",
    controllerAs: "IC"
  })
  .when("/new", {
    templateUrl: "partials/new.html",
    controller: "newController",
    controllerAs: 'NC'

  })
  .when("/show/:_id", {
    templateUrl: "partials/show.html",
    controller: "editController",
    controllerAs: "EC"
  })
  .when("/edit/:_id", {
    templateUrl: "partials/edit.html",
    controller: "editController",
    controllerAs: 'EC'
  })

  .otherwise("/");
});
