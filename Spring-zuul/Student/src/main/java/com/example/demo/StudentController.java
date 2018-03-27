package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/")
	public String getStudent(){
		System.out.println("We are inside students");
		return "Hello Students how are you doing";
	}
}
