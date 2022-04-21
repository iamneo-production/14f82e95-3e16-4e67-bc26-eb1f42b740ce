import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import './add.css'
import './plans.css'
export default function AddPage() {
  const [capacity, setCapacity] = useState("");
  const [brand, setBrand] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [gamount, setGamount] = useState("");
  const [damount, setDamount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const det = { capacity, brand, details, amount,gamount,damount };

    fetch("http://localhost:8080/admin/addPolicy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(det)
    }).then(() => {
      console.log("policy details added");
    });
  };
  return (
    <div className="main">
    <div className='add-components'>
      <h1 className='title'>Add Policy</h1><br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Engine Capacity (CC)"
        variant="filled"
        value={capacity}
        onChange={(e) => {
          setCapacity(e.target.value)
        }} /><br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Car Brand"
        variant="filled"
        value={brand}
        onChange={(e) => {
          setBrand(e.target.value)
        }} /><br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Details About Policy"
        variant="filled"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }} /><br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Premium Amount"
        variant="filled"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value)
        }} /><br />
        <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Premium Gold Amount"
        variant="filled"
        value={gamount}
        onChange={(e) => {
          setGamount(e.target.value)
        }} /><br />
        <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Premium Diamond Amount"
        variant="filled"
        value={damount}
        onChange={(e) => {
          setDamount(e.target.value)
        }} /><br />
      <Button variant="contained" color="success" className='add-btn' onClick={handleSubmit}>
        Add
      </Button>
    </div>
    </div>
  )
}
