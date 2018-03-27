package com.javacodegeeks.snippets.enterprise;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

	public static void main(String[] args) {
	
			ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
			Cat cat = (Cat) context.getBean("cat");
			System.out.println(cat.toString());
			Dog dog = (Dog) context.getBean("dog");			
			System.out.println(dog.toString());	
//			Elephant elephant = (Elephant) context.getBean("elephant");			
//			System.out.println(elephant.toString());	
			Frog frog = (Frog) context.getBean("frog");
			System.out.println(frog.toString());
			Tiger tiger = (Tiger) context.getBean("tiger");
			System.out.println(tiger.toString());
			context.close();
	}
}
