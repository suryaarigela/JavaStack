package com.sample.test.web.WebApplicationDemo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="Employee Not Found") //404
public class ExceptionNotFound extends Exception {
	private static final long serialVersionUID = -3332292346834265371L;

	public ExceptionNotFound(int id){
	
		super("EmployeeNotFoundException with id="+id);
		System.out.println("inside exception");
	}
}
