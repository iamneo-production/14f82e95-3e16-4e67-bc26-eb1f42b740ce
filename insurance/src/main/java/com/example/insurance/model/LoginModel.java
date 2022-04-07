package com.example.insurance.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class LoginModel {
	@Id
	@GeneratedValue
	private int LoginId;

	public LoginModel(int loginId, String email, String password) {
		super();
		LoginId = loginId;
		this.email = email;
		this.password = password;
	}

	public int getLoginId() {
		return LoginId;
	}

	public void setLoginId(int loginId) {
		LoginId = loginId;
	}

	private String email;
	private String password;

	public LoginModel() {
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

	public void setPassword(String password) {
		this.password = password;
	}

}
