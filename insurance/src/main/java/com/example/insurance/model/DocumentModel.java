package com.example.insurance.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table
public class DocumentModel {
	@Id
	@GeneratedValue
	private String Id;
	private String documentName;
	public String getDocumentName() {
		return documentName;
	}

	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}

	private String documenttype;
	
	@Lob
	private byte[] documentupload;

	public DocumentModel() {
	}

	public String getDocumentId() {
		return  Id;
	}

	public void setDocumentId(String documentId) {
		this. Id = documentId;
	}

	public String getDocumenttype() {
		return documenttype;
	}

	public void setDocumenttype(String documenttype) {
		this.documenttype = documenttype;
	}

	public byte[] getDocumentupload() {
		return documentupload;
	}

	public void setDocumentupload(byte[] documentupload) {
		this.documentupload = documentupload;
	}

	public DocumentModel(String  Id, String documentName,String documenttype, byte[] documentupload) {
		super();
		this. Id =  Id;
		this.documentName=documentName;
		this.documenttype = documenttype;
		this.documentupload = documentupload;
	}

}
