package com.example.insurance.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.insurance.model.AdminModel;
import com.example.insurance.model.DocumentModel;
import com.example.insurance.model.PolicyModel;
import com.example.insurance.model.UserModel;
import com.example.insurance.model.vehicleModel;

public interface AuthService {

	public UserModel saveUser(UserModel usermodel);

	public AdminModel saveAdmin(AdminModel adminmodel);

	public UserModel fetchUserByEmail(String email);

	public AdminModel fetchAdminByEmail(String email);

	public UserModel addUser(UserModel usermodel);

	public UserModel getUser(int user_Id);

	public String editUserAdd(UserModel usermodel);

	public void deleteUser(int user_Id);

	public UserModel editUser(int user_Id);

	public PolicyModel addPolicy(PolicyModel policymodel);

	public List<PolicyModel> getPolicy();

	public PolicyModel editPolicy(int policyId);

	public void deletePolicy(int policyId);

	public String editPolicyAdd(PolicyModel policymodel);

	public String approvePolicy(PolicyModel policymodel);

	public String verifyDocuments(DocumentModel documentmodel);

	public UserModel fetchUserByEmailAndPassword(String email, String password);

	public AdminModel fetchAdminByEmailAndPassword(String email, String password);

	public vehicleModel addVehicle(vehicleModel vehiclemodel);

	public vehicleModel getVehicle(int vehicleId);

	public String editVehicleAdd(vehicleModel vehiclemodel);

	public void deleteVehicle(int vehicleId);

	public vehicleModel editVehicle(int vehicleId);

	public List<DocumentModel> getDocumentList();

	public DocumentModel getDocumentById(String id);

	public DocumentModel addDocument(MultipartFile file) throws IOException;

}
