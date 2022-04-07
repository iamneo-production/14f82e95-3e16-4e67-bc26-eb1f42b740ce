package com.example.carddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carddemo.model.Document;

import com.example.carddemo.service.DocService;

@RestController
@RequestMapping("/")
public class DocController {
	@Autowired
	private DocService docService;
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/user/document")
	public String addDocuments(@RequestBody Document document){
        docService.saveDetails(document);
        return "user documents added"; 
    }
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user/document/{name}")
	public List<Document> getByName(@PathVariable String name){
		 return  docService.getUserDocs(name);
		
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/user/updateDocs/{id}")
	public Document updatePlan(@RequestBody Document document,@PathVariable("id") long id) {
		return docService.savePlan(document,id);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/user/deleteDocs/{id}")
	public String deleteDoc(@PathVariable  long id) {
		return docService.deleteDocs(id);
		
	}
}
