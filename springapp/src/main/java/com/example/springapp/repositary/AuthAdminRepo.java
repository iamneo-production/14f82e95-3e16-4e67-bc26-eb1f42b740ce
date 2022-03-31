package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.insurance.model.AdminModel;
  
public interface AuthAdminRepo extends JpaRepository<AdminModel, Integer>{
	
	  public AdminModel findByEmail(String email);
	  public AdminModel findByEmailAndPassword(String email,String password);


}
