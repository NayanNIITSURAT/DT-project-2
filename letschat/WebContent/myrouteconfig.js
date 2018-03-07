var  myapp=angular.module("myapp",["ngRoute"]);
myApp.config(function($routeProvider) {
	
	console.log("i m in route provider")
	$routeProvider.when("#/",{templateUrl:"index.jsp"})
	
	.when("/register",{templateUrl:"template/register.html"})
	.when("/login",{templateUrl:"template/Login.html"})
	
})