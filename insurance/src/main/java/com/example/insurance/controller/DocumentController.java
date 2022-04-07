package com.example.insurance.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.insurance.model.DocumentModel;
import com.example.insurance.service.AuthService;

@RestController

@RequestMapping("/user")
 public class DocumentController {
	
	@Autowired
	private AuthService authService;

@PostMapping("/addDocuments")	
 public DocumentModel uploadDocument(@RequestParam("file") MultipartFile file ) throws IOException {
	return authService.addDocument(file);
	 
 }

@GetMapping("/getDocuments/{id}")
public DocumentModel getDocument(@PathVariable String id) {
	return authService.getDocumentById(id);
	
}

@GetMapping("/getdocument/list")
public List<DocumentModel> getDocList(){
	return authService.getDocumentList();
}
 
 
 
}
