package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LecturerController {
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/")
	public String getLecturer(){
		return "New  lecturer Mr.X was onboarded , Lets welcome him";
	}
}
