package com.example.carddemo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Model {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String capacity;
	private String brand;
	private String details;
	private long amount;
	private long gamount;
	private long damount;
	public Model() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCapacity() {
		return capacity;
	}
	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public long getGamount() {
		return gamount;
	}
	public void setGamount(long gamount) {
		this.gamount = gamount;
	}
	public long getDamount() {
		return damount;
	}
	public void setDamount(long damount) {
		this.damount = damount;
	}
	
	
	
	
	

}
