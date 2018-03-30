package com.niit.test;

import static org.junit.Assert.assertEquals;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.Config.DBConfig;
import com.niit.DAO.ForumDAO;
import com.niit.Model.Blog;
import com.niit.Model.Forum;

public class ForumDeleteTest {
	private static DBConfig config;
	private static ForumDAO forumDAO;

	@BeforeClass
	public static void setUp() {
		config = new DBConfig();
		
		@SuppressWarnings("resource")
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.niit");
		context.refresh();
		
		forumDAO =(ForumDAO) context.getBean("forumDAO");
	}

	@Test
	public void testDeleteForum() {

		Forum forum= new Forum();
		
		 forum=(Forum)forumDAO.getForum(2);
		 assertEquals("sucessfully deleted from table" ,true,forumDAO.deleteForum(forum));
		
	
	}

}
