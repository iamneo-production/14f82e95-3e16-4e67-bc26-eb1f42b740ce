package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.example.insurance.model.UserModel;

public interface AuthRepo extends JpaRepository<UserModel, Integer>{
  public UserModel findByEmail(String email);

	public UserModel findByEmailAndPassword(String email, String password);
 	
}
  


