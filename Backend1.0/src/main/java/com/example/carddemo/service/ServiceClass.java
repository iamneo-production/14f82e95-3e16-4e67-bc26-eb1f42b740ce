package com.example.carddemo.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.carddemo.model.Model;
import com.example.carddemo.repository.RepositoryC;

@Service
public class ServiceClass {
	@Autowired
	private RepositoryC repositoryC;
	public Model saveDetails(Model model) {
        return repositoryC.save(model);
    }
	public List<Model> getAllDetails() {
        return repositoryC.findAll();
    }
//	public void updatePlan(Model model) {
//		// TODO Auto-generated method stub
//		repositoryC.save(model);
//		
//	}
	
	public String deletePlan(int id) {
		// TODO Auto-generated method stub
		repositoryC.deleteById(id);
		return "Plan removed";
	}
	public Model savePlan(Model model,int id) {
		
		Model mod=new Model();
		mod=repositoryC.findById(id).get();
		mod.setCapacity(model.getCapacity());
		mod.setBrand(model.getBrand());
		mod.setDetails(model.getDetails());
		mod.setAmount(model.getAmount());
		return repositoryC.save(mod);
	}
	
	
	
	
	
}
