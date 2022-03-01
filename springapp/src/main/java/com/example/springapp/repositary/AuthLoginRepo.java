package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.example.insurance.model.LoginModel;

	public interface AuthLoginRepo extends JpaRepository<LoginModel, Integer>{
	  public LoginModel findByEmail(String email);


}
