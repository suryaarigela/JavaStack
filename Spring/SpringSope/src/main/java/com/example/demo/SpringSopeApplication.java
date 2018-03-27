package com.example.demo;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;

@SpringBootApplication
public class SpringSopeApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context=	SpringApplication.run(SpringSopeApplication.class, args);
		
		Employee service1 = context.getBean("employee", Employee.class);
		System.out.println(service1);
		Employee service2 = context.getBean("employee", Employee.class);
		System.out.println(service2);
	}
	
	
	
	
	 @Bean("employee")
	   @Scope("prototype")
	public Employee getEmployee(){
		return new Employee();
	}
}
