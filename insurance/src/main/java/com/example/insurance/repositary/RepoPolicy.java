package com.example.insurance.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.insurance.model.PolicyModel;

public interface RepoPolicy extends JpaRepository<PolicyModel, Integer> {

}
