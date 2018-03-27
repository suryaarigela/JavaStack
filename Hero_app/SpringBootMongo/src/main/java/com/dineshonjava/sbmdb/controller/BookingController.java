/**
 * 
 */
package com.dineshonjava.sbmdb.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dineshonjava.sbmdb.models.Booking;
import com.dineshonjava.sbmdb.models.BookingRepository;
import com.dineshonjava.sbmdb.models.FaceBookRepository;
import com.dineshonjava.sbmdb.models.FaceBookUser;
import com.dineshonjava.sbmdb.models.Hero;
import com.dineshonjava.sbmdb.models.HeroRepository;
import com.dineshonjava.sbmdb.models.Image;
import com.dineshonjava.sbmdb.models.ImageRepository;

/**
 * @author Dinesh.Rajput
 *
 */
@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired
	FaceBookRepository facebookRepository;
	
	@Autowired
	HeroRepository hr;
	
	@Autowired
	ImageRepository imageRepository;
	/**
	 * GET /create  --> Create a new booking and save it in the database.
	 */

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public Map<String, Object> create(@RequestBody Booking booking) {
		booking.setTravelDate(new Date());
		booking = bookingRepository.save(booking);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("message", "Booking created successfully done");
		dataMap.put("status", "1");
		dataMap.put("booking", booking);
	    return dataMap;
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/createImage", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> create(@RequestBody Image img) {
		imageRepository.save(img);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/getImage", method = RequestMethod.GET)
	public Image creaetImage() {
		List<Image> img=imageRepository.findAll();
		return img.get(0);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/createFBUser", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> create(@RequestBody FaceBookUser user) {
		facebookRepository.save(user);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/deleteHero/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<HttpStatus> create(@PathVariable("id")  int heroId) {
		System.out.println("Deleting hero with ID "+heroId);
		Hero hero=hr.findByHeroId(heroId);
		hr.delete(hero);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/createHero", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> create(@RequestBody Hero user) {
		hr.save(user);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/hero/update", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> updateHero(@RequestBody Hero user) {
		hr.save(user);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	
	
	/**
	 * GET /read  --> Read a booking by booking id from the database.
	 */
	@RequestMapping("/read")
	public Map<String, Object> read(@RequestParam String bookingId) {
		Booking booking = bookingRepository.findOne(bookingId);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("message", "Booking found successfully");
		dataMap.put("status", "1");
		dataMap.put("booking", booking);
	    return dataMap;
	}
	
	
	
	/**
	 * GET /read  --> Read a booking by booking id from the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/findUser/{email}",method=RequestMethod.GET)
	public FaceBookUser findFBUser(@PathVariable("email")  String email) {
		System.out.println("requested email "+email);
		FaceBookUser user = facebookRepository.findByEmail(email+".com");
		System.out.println(user.getEmail());
	    return user;
	}
	/**
	 * GET /update  --> Update a booking record and save it in the database.
	 */
	@RequestMapping("/update")
	public Map<String, Object> update(@RequestParam String bookingId, @RequestParam String psngrName) {
		Booking booking = bookingRepository.findOne(bookingId);
		booking.setPsngrName(psngrName);
		booking = bookingRepository.save(booking);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("message", "Booking updated successfully");
		dataMap.put("status", "1");
		dataMap.put("booking", booking);
	    return dataMap;
	}
	
	
	/**
	 * GET /update  --> Update a booking record and save it in the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/addFriend/{user}/{friend}",method=RequestMethod.GET)
	public ResponseEntity<HttpStatus> addFriend(@PathVariable("user")  String userName,@PathVariable("friend")  String friend) {
		FaceBookUser fbUser = facebookRepository.findByUserName(userName);
		List<String> friends=fbUser.getFriends();
		if(friends==null){
			friends=new ArrayList<>();
		}
		friends.add(friend);
		fbUser.setFriends(friends);
		facebookRepository.save(fbUser);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * GET /update  --> Update a booking record and save it in the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/hero/{id}",method=RequestMethod.GET)
	public Hero getHero(@PathVariable("id")  int heroId) {
		Hero hero = hr.findByHeroId(heroId);
		return hero;
	}
	
	
	/**
	 * GET /update  --> Update a booking record and save it in the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/herosearch/{term}",method=RequestMethod.GET)
	public Hero[] getHeroNyName(@PathVariable("term")  String term) {
		Hero[] hero = hr.findByName(term);
		return hero;
	}
	
	
	/**
	 * GET /update  --> Update a booking record and save it in the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/verify/{email}/{password}",method=RequestMethod.GET)
	public ResponseEntity<HttpStatus> verify(@PathVariable("email")  String email,@PathVariable("password")  String password) {
		FaceBookUser fbUser = facebookRepository.findByEmail(email);
		System.out.println("fbUser.getPassword() "+fbUser.getPassword());
		System.out.println("password "+password);
		if(fbUser.getPassword().equalsIgnoreCase(password)){
			System.out.println("Success ");
		return new ResponseEntity<>(HttpStatus.OK);
		}else{
			System.out.println("Failure");
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	/**
	 * GET /delete  --> Delete a booking from the database.
	 */
	@RequestMapping("/delete")
	public Map<String, Object> delete(@RequestParam String bookingId) {
		bookingRepository.delete(bookingId);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("message", "Booking deleted successfully");
		dataMap.put("status", "1");
	    return dataMap;
	}
	
	/**
	 * GET /delete  --> Delete a booking from the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/delFBUser/{email}",method=RequestMethod.DELETE)
	public void deleteFbUser(@PathVariable("email")  String email) {
		facebookRepository.deleteByEmail(email);
		
	}
	
	/**
	 * GET /read  --> Read all booking from the database.
	 */
	@RequestMapping("/read-all")
	public Map<String, Object> readAll() {
		List<Booking> bookings = bookingRepository.findAll();
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("message", "Booking found successfully");
		dataMap.put("totalBooking", bookings.size());
		dataMap.put("status", "1");
		dataMap.put("bookings", bookings);
	    return dataMap;
	}
	

	/**
	 * GET /read  --> Read all booking from the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/AllFBUser")
	public List<FaceBookUser> findAllFBUser() {
		List<FaceBookUser> users = facebookRepository.findAll();
	    return users;
	}
	
	
	/**
	 * GET /read  --> Read all booking from the database.
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/AllHeros")
	public List<Hero> findAllHeros() {
		List<Hero> users = hr.findAll();
	    return users;
	}
	
}
