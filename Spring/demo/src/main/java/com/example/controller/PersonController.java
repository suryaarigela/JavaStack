package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.domain.Person;

@Controller
public class PersonController {

	@ResponseBody
	@RequestMapping("/")
	String myFirstApp(){
		return "Welcome to Spring World-----------";
	}
	
	@ResponseBody
	@RequestMapping("/getFirst")
	String getFirstString(){
		return "Hey THis is my First Programme";
	}
	
	
	@RequestMapping(value="/person", method = RequestMethod.GET)
	public String getPerson(Model model){
		Person p=new Person();
		p.setAge(35);
		p.setName("Surya");
		p.setPlace("Kakinada");
		model.addAttribute("person", p);
		return "person";
	}
	
	@RequestMapping(value = "/addPerson", method = RequestMethod.POST)
     public String addStudent(@RequestBody Person person,
  ModelMap model) {
     model.addAttribute("name", person.getName());
     model.addAttribute("age", person.getAge());
     model.addAttribute("place", person.getPlace());
     System.out.println("Succfully Added person with "+person.getName());
     model.addAttribute("person", person);
     return "person";
  }
	
	
}
