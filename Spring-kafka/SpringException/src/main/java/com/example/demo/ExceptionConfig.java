package com.example.demo;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionConfig {

	@ExceptionHandler(value=Exception.class)
	public String handleException(HttpServletRequest req,Exception e){
		System.out.println("Request issue initiated from "+req.getRequestURL());
		return "";
	}
}
