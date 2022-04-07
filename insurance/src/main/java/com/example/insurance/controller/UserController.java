package com.example.insurance.controller;

 
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RestController;

import com.example.insurance.model.UserModel;
import com.example.insurance.service.AuthService;
 
@RestController
public class UserController {
	@Autowired
	private AuthService authService;
	
	@PostMapping("/user/adduser")
	
	public UserModel addUser(@RequestBody UserModel usermodel) {
		return this.authService.addUser(usermodel);
	}
	
	
	@GetMapping("/user/{user_Id}")
	public UserModel getUser(@PathVariable("user_Id") String user_Id) {
		return this.authService.getUser(Integer.parseInt(user_Id));
		
	}
	
    @GetMapping("user/edit/{user_Id}")
 public UserModel editUser(@PathVariable("user_Id") String user_Id) {
		return this.authService.editUser(Integer.parseInt(user_Id));
 }
	 
		
	@PutMapping("user/edit")
	 public String editUserAdd(@RequestBody UserModel usermodel) {
		 return this.authService.editUserAdd(usermodel);
 	 		
	}
	 
	@DeleteMapping("/user/{user_Id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable("user_Id") String  user_Id) {
		try {
			this.authService.deleteUser(Integer.parseInt(user_Id));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
 	}
	

}
