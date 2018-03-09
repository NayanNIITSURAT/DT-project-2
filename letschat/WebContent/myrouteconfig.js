var  myApp=angular.module("myApp",["ngRoute"]);
myApp.config(function($routeProvider) {
	
	console.log("i m in route provider");
	$routeProvider.when("#/",{templateUrl:"index.jsp"})
	.when("/register",{templateUrl:"template/registration.html"})
	.when("/login",{templateUrl:"template/Login.html"})
	
})