package com.example.insurance.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class AdminModel {
	@Id
	@GeneratedValue
	private int AdminId;
	private String email;
	private String password;
	private String mobileNumber;
	private String userRole;

	public AdminModel() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public AdminModel(int adminId, String email, String password, String mobileNumber, String userRole) {
		super();
		AdminId = adminId;
		this.email = email;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.userRole = userRole;
	}

	public int getAdminId() {
		return AdminId;
	}

	public void setAdminId(int adminId) {
		AdminId = adminId;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

}
