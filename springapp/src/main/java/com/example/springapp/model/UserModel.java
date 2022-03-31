package com.example.insurance.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
//@Getter 
//@Getter
public class UserModel {

	@Id
	@GeneratedValue
	private int user_Id;
	private String email;
	private String password;
	private String username;
	private String mobileNumber;
	private String userRole;

	public UserModel(int user_Id, String userRole, String mobileNumber, String username, String password,
			String email) {
		super();
		this.user_Id = user_Id;
		this.mobileNumber = mobileNumber;
		this.userRole = userRole;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public UserModel() {
	}

	public int getUser_id() {
		return user_Id;
	}

	@Id
	public void setUser_id(int user_id) {
		this.user_Id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

}
