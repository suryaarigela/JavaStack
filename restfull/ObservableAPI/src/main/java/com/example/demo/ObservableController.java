package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ObservableController {

	public static int callingTime=1;
	@RequestMapping(value = "/hello")
	public String getMessage(){
		System.out.println("Calling "+callingTime);
		callingTime++;
		return "Hi Surya";
	}
}
