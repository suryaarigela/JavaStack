package com.example.SpringH2Example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;

@RestController
public class UserController {

	@Autowired
	UserRepository repository;

	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public ResponseEntity<Void> createUser(@RequestBody User user) {
		System.out.println("Creating User " + user.getFirstName());

		if (repository.findByFirstName(user.getFirstName()) != null) {
			System.out.println("A User with name " + user.getFirstName() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		repository.save(user);

		HttpHeaders headers = new HttpHeaders();
		// headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
}
