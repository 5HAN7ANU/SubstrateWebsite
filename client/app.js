angular.module('Substrate', ['ngRoute', 'ngResource', 'Substrate.controllers', 'Substrate.services', 'Substrate.factories', 'NavbarApp.directives'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/events', { 
        templateUrl: 'views/events.html',
        controller: 'EventController'
    })
    .when('/magazine/:id', {
        templateUrl: 'views/article/html',
        controller: 'ArticleController'
    })
    .when('/magazine', {
        templateUrl: 'views/magazine.html',
        controller: 'MagazineController'
    })
    .when('/compose', {
        templateUrl: 'views/compose.html',
        controller: 'ComposeController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/users/create', {
        templateUrl: 'views/createuser.html',
        controller: 'CreateUserController'
    })
}]);