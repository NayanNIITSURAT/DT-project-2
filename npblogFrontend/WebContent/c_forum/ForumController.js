myApp.controller("ForumController",function($scope,$http,$location)
{
	$scope.forum={"forumName":'',"forumContent":'',"createDate":'',"username":'',"status":''}
		
	
	
	$scope.forumdata;

	$scope.insertForum=function()
	{
		console.log("Enter into insertForum Method");
		$http.post('http://localhost:8098/npblogmidware/addForum',$scope.forum)
		.then(fetchAllForum(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
	
			
		        $location.path("/displayForum");
				 alert("Forum sucessfully inserted.");

	     });			
	};
	
	
	
	$scope.deleteForum=function(forumId)
	{
		console.log('Enter into the delete forum method');
		$http.delete('http://localhost:8098/npblogmidware/deleteforum/'+forumId)
		.then(fetchAllForum(),function(response)
				{
			        console.log('Deleted');
			        $location.path("/displayForum");
				});
	};
	
	
	
	
	/*$scope.updateBlog=function(blogId)
	{
		console.log('Enter into the update blog method');
		console.log(blogId);
		$http.post('http://localhost:8098/npblogmidware/Update/'+blogId)
		.then(fetchAllBlog(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			        $location.path("/displayBlog");
			        
				});
	};
	
	
	
	
	$scope.editBlog=function(blogId)
	{
		console.log('Enter into the edit blog method');
		$http.get('http://localhost:8098/npblogmidware/getById/'+blogId)
		.then(function(response)
				{
			  console.log(response.data);
			          $scope.blog=response.data;
			        console.log('updated');
			        console.log('Status Text:'+response.statusText);
			        $location.path("/updateBlog");
			        
				});
	};
	*/
	
	function fetchAllForum()
	{
		console.log('Fetching All Forums');
		$http.get("http://localhost:8098/npblogmidware/listForums")
		.then(function(response)
				{
			            $scope.forumdata=response.data;
				});
	}
	
	
	
	
	fetchAllForum();
	
});