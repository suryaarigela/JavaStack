package com.sample.test.web.WebApplicationDemo;

import java.io.IOException;
import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Configuration
@EnableAutoConfiguration
@Controller
@ComponentScan
public class WebApplicationDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebApplicationDemoApplication.class, args);
	}
	@RequestMapping("/ExceptionNotFound")
	String getFirstString() throws ExceptionNotFound{
		if(true){
			throw new ExceptionNotFound(1);
		}
	
		return "Hey THis is my First Programme";
	}
	

@RequestMapping("/SqlException")
String SqlException() throws SQLException{
	if(true){
		throw new SQLException();
	}

	return "Hey THis is my First Programme";
}


@RequestMapping("/IOException")
String IOException() throws IOException{
	if(true){
		throw new IOException();
	}

	return "Hey THis is my First Programme";
}

	 
}
