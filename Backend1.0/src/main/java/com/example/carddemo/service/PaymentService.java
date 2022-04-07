package com.example.carddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.carddemo.model.Payment;
import com.example.carddemo.repository.PaymentRepo;

@Service
public class PaymentService {
@Autowired
private PaymentRepo paymentRepo;
	public Payment saveDetails(Payment pay) {
		return paymentRepo.save(pay);
		
	}
	public List<Payment> getAppliedpolicy(String ownername) {
		// TODO Auto-generated method stub
		return paymentRepo.findByOwnername(ownername);
	}

}
