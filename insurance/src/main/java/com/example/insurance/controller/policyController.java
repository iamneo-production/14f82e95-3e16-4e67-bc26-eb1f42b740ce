package com.example.insurance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.insurance.model.PolicyModel;
import com.example.insurance.service.AuthService;

@RestController
public class policyController {

	@Autowired
	private AuthService authService;

	@PostMapping("/addPolicy")
	public PolicyModel addPolicy(@RequestBody PolicyModel policymodel) {
		return this.authService.addPolicy(policymodel);
	}

	@GetMapping("/getPolicy")
	public List<PolicyModel> getPolicy() {
		return this.authService.getPolicy();

	}

	@GetMapping("/editPolicy/{policyId}")
	public PolicyModel editPolicy(@PathVariable int policyId) {
		return this.authService.editPolicy(policyId);
	}

	@PutMapping("editPolicy/edit")
	public String editPolicyAdd(@RequestBody PolicyModel policymodel) {
		return this.authService.editPolicyAdd(policymodel);

	}

	@DeleteMapping("/deletePolicy/{policyId}")
	public ResponseEntity<HttpStatus> deletePolicy(@PathVariable int policyId) {
		try {
			this.authService.deletePolicy(policyId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
