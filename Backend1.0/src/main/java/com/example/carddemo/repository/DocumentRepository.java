package com.example.carddemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carddemo.model.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {

	List<Document> findByName(String name);

}
