package com.example.carddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carddemo.model.Document;

import com.example.carddemo.repository.DocumentRepository;


@Service
public class DocService {
	@Autowired
	private DocumentRepository documentRepository;
	public Document saveDetails(Document document) {
		return documentRepository.save(document);
		
	}
	public List<Document> getUserDocs(String name) {
		
		return  documentRepository.findByName(name);
	}
	public Document savePlan(Document document,long id) {
		// TODO Auto-generated method stub
//		Model samePlan=repositoryC.findById(model.getId()).orElse(null);
//		samePlan.setCapacity(model.getCapacity());
//		samePlan.setBrand(model.getBrand());
//		samePlan.setDetails(model.getDetails());
//		samePlan.setAmount(model.getAmount());
//		return repositoryC.save(samePlan);
		Document doc=new Document();
		doc=documentRepository.findById(id).get();
		doc.setAadhar(document.getAadhar());
		doc.setPan(document.getPan());
		doc.setLicense(document.getLicense());
		doc.setCarnum(document.getCarnum());
		return documentRepository.save(doc);
	}
	public String deleteDocs(long id) {
		// TODO Auto-generated method stub
		documentRepository.deleteById(id);
		return "document removed";
	}

}
