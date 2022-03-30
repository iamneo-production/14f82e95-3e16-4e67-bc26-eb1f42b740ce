package com.example.carddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.carddemo.model.Model;
import com.example.carddemo.model.User;
import com.example.carddemo.service.UserService;

@RestController
@RequestMapping("/")

public class UserController {
	@Autowired
	private UserService userService;
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/user/addDetails")
    public String add(@RequestBody User user){
        userService.saveDetails(user);
        return "user details added"; 
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/admin/viewUserDetails")
	public List<User> getAllUserdetails(){
		return userService.getAllUserDetails();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user/viewProfile/{firstname}")
	public List<User> getByName(@PathVariable String firstname){
		 return  userService.getUserDetails(firstname);
		
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/user/updateProfile/{id}")
	public User updateUser(@RequestBody User user,@PathVariable("id") long id) {
		return userService.saveUser(user,id);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/admin/deleteUser/{id}")
	public String deletePlan(@PathVariable  long id) {
		return userService.deletePlan(id);
		
	}
	
}
