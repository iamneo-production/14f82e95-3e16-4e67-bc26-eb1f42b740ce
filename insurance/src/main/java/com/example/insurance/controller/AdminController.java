package com.example.insurance.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.insurance.model.DocumentModel;
import com.example.insurance.model.PolicyModel;
import com.example.insurance.service.AuthService;

@RestController
public class AdminController {

	AuthService authService;

	@PostMapping("/admin/verifydoc/approve")
	public String approvePolicy(@RequestBody PolicyModel policymodel) {
		return authService.approvePolicy(policymodel);
	}

	@PostMapping("admin/verifydoc")
	public String verifyDocuments(@RequestBody DocumentModel documentmodel) {
		return authService.verifyDocuments(documentmodel);
	}

	@GetMapping("admin/editPolicy/{policyId}")
	public PolicyModel editPolicy(@PathVariable("policyId") String policyId) {
		return this.authService.editPolicy(Integer.parseInt(policyId));
	}

	@PutMapping("admin/editPolicy/add")
	public String editPolicyAdd(@RequestBody PolicyModel policymodel) {
		return this.authService.editPolicyAdd(policymodel);

	}

	@DeleteMapping("admin/deletePolicy/{policyId}")
	public ResponseEntity<HttpStatus> deletePolicy(@PathVariable int policyId) {
		try {
			this.authService.deletePolicy(policyId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
