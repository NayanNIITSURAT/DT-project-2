myApp.controller("BlogController",function($scope,$http,$location,$window)
{
	$scope.blog={"blogName":'',"blogContent":'',"createDate":'',"likes":0,"username":'',"status":''}

	
	
	$scope.blogdata;
	
	$scope.insertBlog=function()
	{
		console.log("Enter into insertBlog Method");
		$http.post('http://localhost:8098/npblogmidware/addBlog',$scope.blog)
		.then(fetchAllBlog(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
			$location.path("/displayBlog");
		  $window.alert("Data inserted successfully");
		
	     });			
	};
	
	
	
	$scope.deleteBlog=function(blogId)
	{
		console.log('Enter into the delete blog method');
		$http.delete('http://localhost:8098/npblogmidware/delete/'+blogId)
		.then(fetchAllBlog(),function(response)
				{
			        console.log('Deleted');
			        $location.path("/displayBlog");
				});
	};
	
	
	
	
	$scope.updateBlog=function(blogId)
	{
		altert("in the update blog")
		$http.put('http://localhost:8098/npblogmidware/Update/'+blogId,$scope.blog)
		.then(fetchALLBlogs(),function(response)
				{
			console.log('updated blog'+blogId+'sucessfully');
			console.log(blogId+"updated sucessfuly");
			
			
				});
	};
		
		
		/*
		console.log('Enter into the update blog method');
		console.log(blogId);
		$http.post('http://localhost:8098/npblogmidware/Update/'+blogId,$scope.blog)
		.then(fetchAllBlog(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			        $location.path("/displayBlog");
			        
				});
	}; */
		
	
	
	$scope.editBlog=function(blogId)
	{
		console.log('Enter into the edit blog method');
		$http.get('http://localhost:8098/npblogmidware/getById/'+blogId)
		.then(fetchAllBlog(),function(response)
				{
			  console.log("in edit blog");
			          $scope.blog=response.data;
			        console.log('updated');
			 
			        $location.path("/updateBlog");
			        console.log('Status Text:'+response.statusText);       
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

	$scope.incrementLike=function(blogId)
	{
            	console.log('Enter into the incrementLike blog method');
		        $http.get('http://localhost:8098/npblogmidware/incrementLikes/'+blogId)
		.then( fetchAllBlog(),function(response)
		{
			  console.log('Incerement like'+blogId);
			  $location.path("/displayBlog");
			         
			        
				});
	}
	
	
	function fetchAllBlog()
	{
		console.log('Fetching All Blogs');
		$http.get("http://localhost:8098/npblogmidware/listBlogs")
		.then(function(response)
				{
			            $scope.blogdata=response.data;
				});
	}
	
	
	
	
	fetchAllBlog();
	
});