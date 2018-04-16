
var myApp=angular.module("myApp",['ngRoute','ngCookies']);

myApp.config(function($routeProvider) {
	console.log("i am in root provider")
	$routeProvider.when("/", {
		templateUrl : "/index.jsp"
	})
	.when("/login", {
		templateUrl : "c_user/login.html"
	})
	.when("/Register", {
		templateUrl : "c_user/Register.html"
	})
	.when("/blog",{
		templateUrl : "c_blog/Blog.html"
	})
	.when("/displayBlog",{
		templateUrl : "c_blog/DisplayBlog_page.html"
	})
	.when("/updateBlog",{
		templateUrl : "c_blog/UpdateBlog_page.html"
	})
	
	.when("/forum",{
		templateUrl :"c_forum/Forum.html"
	})
	
	.when("/displayForum",{
		templateUrl : "c_forum/DisplayForum_page.html"
	})
	.when("/job",{
		templateUrl : "c_job/Job.html"
	})
	
	.when("/displayJob",{
		templateUrl : "c_job/DisplayJob_page.html"
	})
	.when("/searchJob",{
		templateUrl : "c_job/JobSearch_page.html"
	})
	.when("/AboutUs", {
		templateUrl : "template/AboutUs.html"
	})
	.when("/ContactUs", {
		templateUrl : "template/ContactUs.html"
	})

	.when("/logout", {
		templateUrl : "c_user/Logout.html"
	})
	.when("/uploadProfilepic", {
		templateUrl : "c_user/UpdateProfile.html"
	})
	
	.when("/chat", {
		templateUrl : "c_chat/Chat.html"
	})
	
	.when("/friend", {
	templateUrl : "c_friend/ShowAllFriendRequst.html"
})
});




myApp.run(function($rootScope,$cookieStore)
{
	      console.log('I am in run function');
	      console.log($rootScope.currentUser);
	      if($rootScope.currentUser==undefined)
	    	  {
	    	        $rootScope.currentUser=$cookieStore.get('user');
	    	  }
	      
	      
	      
	      else
	   {
	    	  console.log($rootScope.currentUser.userName);
	    	  console.log($rootScope.currentUser.role);
	    	  
	     }
 
});

	      
	      
	      
	      
	      