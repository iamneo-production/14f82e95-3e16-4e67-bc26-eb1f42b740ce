import './userdetails.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button } from "@mui/material";

export default function UserDetails() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [nomname, setNomname] = useState("");
  const [nomphn, setNomphn] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [vbrand, setVbrand] = useState("");
  const [vnumber, setVnumber] = useState("");
  const [vcolor, setVcolor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const det = {
      firstname,
      lastname,
      address,
      phonenumber,
      nomname,
      nomphn,
      aadhar,
      pan,
      vcolor,
      vbrand,
      vnumber
    };

    fetch("http://localhost:8080/user/addDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(det)
    }).then(() => {
      alert("user details added click pay button");
    });
  };
  return (
    <div className="add-components1">
      <h1 className="title">Add User Details</h1>
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="First Name"
        variant="filled"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Last Name"
        variant="filled"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="User Address"
        variant="filled"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Phone Number"
        variant="filled"
        value={phonenumber}
        onChange={(e) => {
          setPhonenumber(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Nominee Name"
        variant="filled"
        value={nomname}
        onChange={(e) => {
          setNomname(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Nominee Phone Number"
        variant="filled"
        value={nomphn}
        onChange={(e) => {
          setNomphn(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Aadhar Number"
        variant="filled"
        value={aadhar}
        onChange={(e) => {
          setAadhar(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="PAN Card Number"
        variant="filled"
        value={pan}
        onChange={(e) => {
          setPan(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Vehicle Brand"
        variant="filled"
        value={vbrand}
        onChange={(e) => {
          setVbrand(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Vehicle Number"
        variant="filled"
        value={vnumber}
        onChange={(e) => {
          setVnumber(e.target.value);
        }}
      />
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Vehicle Color"
        variant="filled"
        value={vcolor}
        onChange={(e) => {
          setVcolor(e.target.value);
        }}
      />
      <br />
    
      <Button
        variant="contained"
        color="success"
        className="add-btn"
        onClick={handleSubmit}
      >
        Add
      </Button>
      <br/>
      <Link to='/user/payment' className='link'>
      <Button
        variant="contained"
        color="success"
        className="add-btn"
       
      >
        Pay
      </Button>
      </Link>
    </div>
  );
}
