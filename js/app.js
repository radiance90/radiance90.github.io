var app = angular.module('MySite', ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	}).when('/profile', {
		controller: 'ProfileController',
		templateUrl: 'views/profile.html'
	}).when('/contact', {
		controller: 'ContactController',
		templateUrl: 'views/contact.html'
	});
	//$locationProvider.hashPrefix('');
	//$locationProvider.html5Mode(true);
});