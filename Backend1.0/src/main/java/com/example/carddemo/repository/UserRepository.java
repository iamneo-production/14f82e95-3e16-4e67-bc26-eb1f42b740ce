package com.example.carddemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carddemo.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	List<User> findByFirstname(String firstname);

	

}
