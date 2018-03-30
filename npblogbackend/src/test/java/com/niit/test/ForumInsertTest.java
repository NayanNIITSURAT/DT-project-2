package com.niit.test;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.Config.DBConfig;
import com.niit.DAO.ForumDAO;

import com.niit.Model.Forum;

public class ForumInsertTest {
	
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
	public void testInsertForum() throws ParseException {
		String dt="04/03/2018";
		Date dobj=new SimpleDateFormat("dd/mm/yyyy").parse(dt);
			
			
		Forum forum = new Forum();

		forum.setForumName("Forumnp");
		forum.setForumContent("this is np from");
	    forum.setCreateDate(dobj);
	    forum.setUsername("np");
	    forum.setStatus("NA");
		forumDAO.addForum(forum);
		System.out.println("Done  from inserted");


}
}
