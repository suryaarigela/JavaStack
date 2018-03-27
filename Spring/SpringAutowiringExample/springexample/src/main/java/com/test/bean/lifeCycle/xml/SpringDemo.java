package com.test.bean.lifeCycle.xml;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class SpringDemo {
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
		Book book = (Book)context.getBean("book");
		System.out.println("Book Name:"+ book.getBookName());
	    context.registerShutdownHook();
	}
}