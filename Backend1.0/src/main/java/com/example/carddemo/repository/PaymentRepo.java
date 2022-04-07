package com.example.carddemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carddemo.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Long>{

	List<Payment> findByOwnername(String ownername);

}
