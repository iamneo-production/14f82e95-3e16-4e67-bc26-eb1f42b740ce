package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.insurance.model.PolicyModel;

public interface AdminPolicyRepo extends JpaRepository<PolicyModel, Integer> {

}
