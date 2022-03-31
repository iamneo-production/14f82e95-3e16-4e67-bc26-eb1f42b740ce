import React, { useState } from "react";
import './document.css'
import { Paper } from '@mui/material';

import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Document() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [license, setLicense] = useState("");
  const [carnum, setCarnum] = useState("");
  const [address, setAddress] = useState("");

  //To post documents
  const handleUpload = (e) => {
    e.preventDefault();
    const docs = { name, aadhar, pan, license, carnum, address }
    fetch("http://localhost:8080/user/document", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(docs)
    }).then(() => {
      alert("Your Documents Added");
    });
  }

  //To view documents

  const [docs, setDocs] = useState([])
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const handleView = () => {
    fetch(`http://localhost:8080/user/document/${name}`)
      .then(res =>
        res.json())
      .then((data) => {
        setDocs(data)
        console.log(data)
      })

  }

  return (
    <>
      <div class="column">
        <div className="add-components">
          <h1>Add Documents</h1><br />
          <TextField
            style={{ width: 400 }}
            id="filled-basic"
            label="Enter Your Name"
            variant="filled"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          /><br />
          <TextField
            style={{ width: 400 }}
            id="filled-basic"
            label="Enter Aadhar Number"
            variant="filled"
            value={aadhar}
            onChange={(e) => {
              setAadhar(e.target.value);
            }}
          /><br />
          <TextField
            style={{ width: 400 }}
            id="filled-basic"
            label="Enter Pan Number"
            variant="filled"
            value={pan}
            onChange={(e) => {
              setPan(e.target.value);
            }}
          /><br />
          <TextField
            style={{ width: 400 }}
            id="filled-basic"
            label="Enter License Number"
            variant="filled"
            value={license}
            onChange={(e) => {
              setLicense(e.target.value);
            }}
          /><br />
          <TextField
            style={{ width: 400 }}
            id="filled-basic"
            label="Enter Vehicle Number"
            variant="filled"
            value={carnum}
            onChange={(e) => {
              setCarnum(e.target.value);
            }}
          /><br />
          <TextField
            style={{ width: 400 }}
            id="filled-basic"
            label="Enter Your Address"
            variant="filled"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          /><br />
          <Button
            variant="contained"
            color="success"
            className="add-btn"
            onClick={handleUpload}
          >
            Upload
          </Button>
        </div>
      </div>
      <div className="add-components">
        <h1>View Documents</h1><br />
        <TextField
          style={{ width: 500 }}
          id="filled-basic"
          label="Enter Your Name to View your Uploaded Documents"
          variant="filled"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        /><br />

        <Button
          variant="contained"
          color="success"
          className="add-btn1"
          onClick={handleView}
        >
          View Documents
        </Button>
        <Paper elevation={3} style={paperStyle}>

          {docs.map(user => (
            <Paper elevation={6}
              style={{ margin: "10px", padding: "15px", textAlign: "left" }}
              key={user.id}>


              Id:{user.id}<br />
              Name:{user.name}<br />
              Aadhar Number:{user.aadhar}<br />
              Pan Number:{user.pan}<br />
              License Number:{user.license}<br />
              Vehicle Number:{user.carnum}<br />
              Address:{user.address}<br />



            </Paper>
          ))
          }
        </Paper>
        <Link to='/user/updateDocs' className="link">
          <Button
            variant="contained"
            color="success"
            className="add-btn1"

          >
            Update Documents
          </Button></Link>
      </div>

    </>
  )
}
