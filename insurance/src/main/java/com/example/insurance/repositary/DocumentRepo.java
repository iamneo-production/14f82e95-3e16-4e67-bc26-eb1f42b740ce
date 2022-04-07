package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.insurance.model.DocumentModel;

public interface DocumentRepo extends JpaRepository<DocumentModel, String>{

}
