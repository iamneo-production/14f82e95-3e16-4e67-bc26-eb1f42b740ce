package com.example.carddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carddemo.model.Model;
import com.example.carddemo.model.User;
import com.example.carddemo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	public User saveDetails(User user) {
        return userRepository.save(user);
    }
	// to see the users from front end
	public List<User> getAllUserDetails() {
        return userRepository.findAll();
    }
	
	public String deletePlan(long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
		return "Plan removed";
	}
	public List<User> getUserDetails(String firstname) {
		// TODO Auto-generated method stub
		return  userRepository.findByFirstname(firstname);
		 
		
	}
	public User saveUser(User user,long id) {
		User use=new User();
		use=userRepository.findById(id).get();
		use.setFirstname(user.getFirstname());
		use.setLastname(user.getLastname());
		use.setAddress(user.getAddress());
		use.setPhonenumber(user.getPhonenumber());
		return userRepository.save(use);
	}
}
