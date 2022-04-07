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

import com.example.carddemo.service.ServiceClass;


@RestController

@RequestMapping("/")
public class Control {
		@Autowired
		private ServiceClass serviceClass;
		
		//add plans method
		@CrossOrigin(origins = "http://localhost:3000")
		@PostMapping("/admin/addPolicy")
	    public String add(@RequestBody Model model){
	        serviceClass.saveDetails(model);
	        return "new policy added"; 
	    }
		
		//get results method
		
		@CrossOrigin(origins = "http://localhost:3000")
		@GetMapping({"/admin/viewPolicy","/user/viewPolicy"})
		public List<Model> getAlldetails(){
			return serviceClass.getAllDetails();
		}
		
		//get result by heading
//       @GetMapping("/details/{heading}")
//       public Model findPlanByName(@PathVariable String heading) {
//    	   return serviceClass.getPlanByName(heading);
//       }
		
		//update method
		@CrossOrigin(origins = "http://localhost:3000")
		@PutMapping("/admin/updatePolicy/{id}")
		public Model updatePlan(@RequestBody Model model,@PathVariable("id") int id) {
			return serviceClass.savePlan(model,id);
		}
		
		//delete method
		@CrossOrigin(origins = "http://localhost:3000")
		@DeleteMapping("/admin/deletePlan/{id}")
		public String deletePlan(@PathVariable  int id) {
			return serviceClass.deletePlan(id);
			
		}
		
		
		
		
}
