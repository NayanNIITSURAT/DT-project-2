var  myApp=angular.module("myApp",["ngRoute"]);
myApp.config(function($routeProvider) {
	
	console.log("i m in route provider");
	$routeProvider.when("/",{templateUrl:"/index.jsp"})
	.when("/register",{templateUrl:"template/Register.jsp"})
	.when("/login",{templateUrl:"template/Login.html"})
		.when("/blog",{templateUrl:"c_blog/Blog.html"})
		.when("/Aboutus",{templateUrl:"template/Aboutus.html"})
			.when("/contactus",{templateUrl:"template/contactus.html"})
})