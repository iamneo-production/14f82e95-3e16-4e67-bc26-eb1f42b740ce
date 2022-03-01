package com.example.insurance.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table
public class vehicleModel {
	@Id
	@GeneratedValue
	private int vehicleId;

	public vehicleModel(int vehicleId, String vehicleBrand, String vehicletype, String vechicleKms,
			String vehicleRegistrationNumber, String vehicleOwnerName, String vehicleFuelType,
			Date vehicleYearofManufacture) {
		super();
		this.vehicleId = vehicleId;
		this.vehicleBrand = vehicleBrand;
		this.vehicletype = vehicletype;
		this.vechicleKms = vechicleKms;
		this.vehicleRegistrationNumber = vehicleRegistrationNumber;
		this.vehicleOwnerName = vehicleOwnerName;
		this.vehicleFuelType = vehicleFuelType;
		this.vehicleYearofManufacture = vehicleYearofManufacture;
	}

	private String vehicleBrand;
	private String vehicletype;
	private String vechicleKms;
	private String vehicleRegistrationNumber;
	private String vehicleOwnerName;
	private String vehicleFuelType;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date vehicleYearofManufacture;

	public vehicleModel() {
	}

	public String getVehicleBrand() {
		return vehicleBrand;
	}

	public void setVehicleBrand(String vehicleBrand) {
		this.vehicleBrand = vehicleBrand;
	}

	public String getVehicletype() {
		return vehicletype;
	}

	public void setVehicletype(String vehicletype) {
		this.vehicletype = vehicletype;
	}

	public String getVechicleKms() {
		return vechicleKms;
	}

	public void setVechicleKms(String vechicleKms) {
		this.vechicleKms = vechicleKms;
	}

	public String getVehicleRegistrationNumber() {
		return vehicleRegistrationNumber;
	}

	public void setVehicleRegistrationNumber(String vehicleRegistrationNumber) {
		this.vehicleRegistrationNumber = vehicleRegistrationNumber;
	}

	public String getVehicleOwnerName() {
		return vehicleOwnerName;
	}

	public void setVehicleOwnerName(String vehicleOwnerName) {
		this.vehicleOwnerName = vehicleOwnerName;
	}

	public String getVehicleFuelType() {
		return vehicleFuelType;
	}

	public void setVehicleFuelType(String vehicleFuelType) {
		this.vehicleFuelType = vehicleFuelType;
	}

	public Date getVehicleYearofManufacture() {
		return vehicleYearofManufacture;
	}

	public void setVehicleYearofManufacture(Date vehicleYearofManufacture) {
		this.vehicleYearofManufacture = vehicleYearofManufacture;
	}
}
