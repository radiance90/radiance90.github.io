var app = angular.module('MySite', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	}).when('/about', {
		controller: 'AboutController',
		templateUrl: 'views/about.html'
	}).when('/contact', {
		controller: 'ContactController',
		templateUrl: 'views/contact.html'
	});
});