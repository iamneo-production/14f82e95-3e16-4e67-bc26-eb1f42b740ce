package com.example.carddemo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String firstname;
	private String lastname;
	private String address;
	private long phonenumber;
	private String nomname;
	private String nomphn;
	private long aadhar;
	private String pan;
	private String vbrand;
	private String vnumber;
	private String vcolor;
	
	
	public User() {
		
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public long getPhonenumber() {
		return phonenumber;
	}


	public void setPhonenumber(long phonenumber) {
		this.phonenumber = phonenumber;
	}


	public String getNomname() {
		return nomname;
	}


	public void setNomname(String nomname) {
		this.nomname = nomname;
	}


	public String getNomphn() {
		return nomphn;
	}


	public void setNomphn(String nomphn) {
		this.nomphn = nomphn;
	}


	public long getAadhar() {
		return aadhar;
	}


	public void setAadhar(long aadhar) {
		this.aadhar = aadhar;
	}


	public String getPan() {
		return pan;
	}


	public void setPan(String pan) {
		this.pan = pan;
	}


	public String getVbrand() {
		return vbrand;
	}


	public void setVbrand(String vbrand) {
		this.vbrand = vbrand;
	}


	public String getVnumber() {
		return vnumber;
	}


	public void setVnumber(String vnumber) {
		this.vnumber = vnumber;
	}


	public String getVcolor() {
		return vcolor;
	}


	public void setVcolor(String vcolor) {
		this.vcolor = vcolor;
	}
	
	
	
}
