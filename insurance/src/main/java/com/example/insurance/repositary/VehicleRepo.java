package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.insurance.model.vehicleModel;

public interface VehicleRepo extends JpaRepository<vehicleModel, Integer> {

}
