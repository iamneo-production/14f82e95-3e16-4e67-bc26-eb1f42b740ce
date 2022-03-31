package com.example.insurance.controller;

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

import com.example.insurance.model.vehicleModel;
import com.example.insurance.service.AuthService;

@RestController
public class VehicleController {

	@Autowired
	private AuthService authService;

	@PostMapping("/user/addvehicledetails")
	public vehicleModel addVehicle(@RequestBody vehicleModel vehiclemodel) {
		return this.authService.addVehicle(vehiclemodel);
	}

	@GetMapping("/user/{vehicleId}")
	public vehicleModel getVehicle(@PathVariable("vehicleId") String vehicleId) {
		return this.authService.getVehicle(Integer.parseInt(vehicleId));

	}

	@GetMapping("user/edit/{vehicleId}")
	public vehicleModel editVehicle(@PathVariable("vehicleId") String vehicleId) {
		return this.authService.editVehicle(Integer.parseInt(vehicleId));
	}

	@PutMapping("user/editVehicle")
	public String editVehicleAdd(@RequestBody vehicleModel vehiclemodel) {
		return this.authService.editVehicleAdd(vehiclemodel);

	}

	@DeleteMapping("/user/{vehicleId}")
	public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable("vehicleId") String vehicleId) {
		try {
			this.authService.deleteVehicle(Integer.parseInt(vehicleId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
