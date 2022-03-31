package com.example.insurance.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class DocumentModel {
	@Id
	@GeneratedValue
	private int documentId;
	private String documenttype;
	private Byte[] documentupload;

	public DocumentModel() {
	}

	public int getDocumentId() {
		return documentId;
	}

	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}

	public String getDocumenttype() {
		return documenttype;
	}

	public void setDocumenttype(String documenttype) {
		this.documenttype = documenttype;
	}

	public Byte[] getDocumentupload() {
		return documentupload;
	}

	public void setDocumentupload(Byte[] documentupload) {
		this.documentupload = documentupload;
	}

	public DocumentModel(int documentId, String documenttype, Byte[] documentupload) {
		super();
		this.documentId = documentId;
		this.documenttype = documenttype;
		this.documentupload = documentupload;
	}

}
