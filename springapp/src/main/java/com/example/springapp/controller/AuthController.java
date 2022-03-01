package com.example.insurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.insurance.model.UserModel;
import com.example.insurance.model.AdminModel;
import com.example.insurance.service.AuthService;

@RestController
public class AuthController {
	@Autowired
	private AuthService authService;

	@PostMapping("/user/login")
	public boolean isUserPresent(@RequestBody UserModel usermodel) {
		String tempEmail = usermodel.getEmail();
		String tempPass = usermodel.getPassword();
		UserModel userObj = null;
		if (tempEmail != null && tempPass != null) {
			userObj = authService.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if (userObj == null) {
			return false;
		}
		return true;
	}

	@PostMapping("/admin/login")
	public boolean isAdminPresent(@RequestBody AdminModel adminmodel) {
		String tempEmail = adminmodel.getEmail();
		String tempPass = adminmodel.getPassword();
		AdminModel adminObj = null;
		if (tempEmail != null && tempPass != null) {
			adminObj = authService.fetchAdminByEmailAndPassword(tempEmail, tempPass);
		}
		if (adminObj == null) {
			return false;
		}
		return true;
	}

	@PostMapping("/user/signup")
	public UserModel saveUser(@RequestBody UserModel usermodel) throws Exception {
		String tempEmail = usermodel.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			UserModel userobj = authService.fetchUserByEmail(tempEmail);
			if (userobj != null) {
				throw new Exception("user with " + tempEmail + "is already present");
			}
		}
		UserModel userObj = null;
		userObj = authService.saveUser(usermodel);
		return userObj;
	}

	@PostMapping("/admin/signup")
	public AdminModel saveAdmin(@RequestBody AdminModel adminmodel) throws Exception {
		String tempEmail = adminmodel.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			AdminModel adminobj = authService.fetchAdminByEmail(tempEmail);
			if (adminobj != null) {
				throw new Exception("admin with " + tempEmail + "is already present");
			}
		}
		AdminModel adminObj = null;
		adminObj = authService.saveAdmin(adminmodel);
		return adminObj;
	}

}
