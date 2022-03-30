package com.example.carddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.carddemo.model.Payment;

import com.example.carddemo.service.PaymentService;

@RestController
@RequestMapping("/")
public class PaymentController {
	@Autowired
	private PaymentService paymentService;
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/user/payment")
	public String addPayment(@RequestBody Payment pay){
        paymentService.saveDetails(pay);
        return "user payment arrived"; 
    }
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user/payment/{ownername}")
	public List<Payment> getByName(@PathVariable String ownername){
		 return  paymentService.getAppliedpolicy(ownername);
		
	}
}
