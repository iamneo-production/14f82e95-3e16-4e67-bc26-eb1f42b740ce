package com.example.insurance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.insurance.model.AdminModel;
import com.example.insurance.model.DocumentModel;
import com.example.insurance.model.PolicyModel;
import com.example.insurance.model.UserModel;
import com.example.insurance.model.vehicleModel;
import com.example.insurance.repositary.AuthAdminRepo;
import com.example.insurance.repositary.AuthRepo;
import com.example.insurance.repositary.RepoPolicy;
import com.example.insurance.repositary.VehicleRepo;

@Service
public class AuthServiceimpl implements AuthService {
	@Autowired
	private AuthRepo authRepo;
	@Autowired
	private AuthAdminRepo authadminRepo;
	@Autowired
	private RepoPolicy repoPolicy;
	@Autowired
	private VehicleRepo vehiclerepo;

	@Override
	public UserModel saveUser(UserModel usermodel) {
		authRepo.save(usermodel);
		return usermodel;
	}

	public UserModel fetchUserByEmail(String email) {
		return authRepo.findByEmail(email);
	}

	@Override
	public AdminModel saveAdmin(AdminModel adminmodel) {
		authadminRepo.save(adminmodel);
		return adminmodel;
	}

	@Override
	public UserModel fetchUserByEmailAndPassword(String email, String password) {
		return authRepo.findByEmailAndPassword(email, password);
	}

	@Override
	public AdminModel fetchAdminByEmail(String email) {
		return authadminRepo.findByEmail(email);
	}

	@Override
	public AdminModel fetchAdminByEmailAndPassword(String email, String password) {
		return authadminRepo.findByEmailAndPassword(email, password);
	}

	@Override
	public UserModel addUser(UserModel usermodel) {
		authRepo.save(usermodel);
		return usermodel;
	}

	@Override
	public UserModel getUser(int user_Id) {
		return authRepo.findById(user_Id).get();

	}

	@Override
	public void deleteUser(int user_Id) {
		UserModel en = authRepo.findById(user_Id).get();
		authRepo.delete(en);
	}

	@Override
	public UserModel editUser(int user_Id) {
		return authRepo.findById(user_Id).get();

	}

	@Override
	public String editUserAdd(UserModel usermodel) {
		authRepo.save(usermodel);
		return "User Added Successfully";
	}

	@Override
	public PolicyModel addPolicy(PolicyModel policymodel) {

		return repoPolicy.save(policymodel);
	}

	@Override
	public List<PolicyModel> getPolicy() {

		return repoPolicy.findAll();
	}

	@Override
	public PolicyModel editPolicy(int policyId) {
		return repoPolicy.findById(policyId).get();

	}

	@Override
	public void deletePolicy(int policyId) {
		PolicyModel en = repoPolicy.findById(policyId).get();
		repoPolicy.delete(en);
	}

	@Override
	public String editPolicyAdd(PolicyModel policymodel) {
		repoPolicy.save(policymodel);
		return "Policy Added Successfully";
	}

	@Override
	public String approvePolicy(PolicyModel policymodel) {

		if (policymodel != null)
			return "Approved";
		else
			return "Not Approved";
	}

	@Override
	public String verifyDocuments(DocumentModel documentmodel) {
		if (documentmodel != null)
			return "Proceed";
		else
			return "Not Approved";
	}

	@Override
	public vehicleModel addVehicle(vehicleModel vehiclemodel) {

		vehiclerepo.save(vehiclemodel);
		return vehiclemodel;

	}

	@Override
	public vehicleModel getVehicle(int vehicleId) {
		return vehiclerepo.findById(vehicleId).get();
	}

	@Override
	public String editVehicleAdd(vehicleModel vehiclemodel) {

		vehiclerepo.save(vehiclemodel);
		return "Vehicle Added Successfully";

	}

	@Override
	public void deleteVehicle(int vehicleId) {
		vehicleModel en = vehiclerepo.findById(vehicleId).get();
		vehiclerepo.delete(en);
	}

	@Override
	public vehicleModel editVehicle(int vehicleId) {
		return vehiclerepo.findById(vehicleId).get();
	}

}

//@Override
//public boolean exist(LoginModel loginModel) {
//		return authRepoL.isUserPresent(loginModel);
// }

//@Override
//public boolean isexistAdmin(LoginModel loginModel) {
//		return authRepoL.isAdminPresent(loginModel);
// }}
