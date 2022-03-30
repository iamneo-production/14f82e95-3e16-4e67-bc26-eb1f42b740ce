package com.example.carddemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.carddemo.model.Model;



@Repository
public interface RepositoryC extends JpaRepository<Model, Integer>{

	

	
}
