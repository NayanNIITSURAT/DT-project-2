package com.niit.test;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class BlogDAOTtest {

	
	@BeforeClass
	
	public static void initialized()
	{
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext();
		context.scan("com.niit");
		context.refresh();
	}
	@Test
	public void test() {
		fail("Not yet implemented");
	}

}
