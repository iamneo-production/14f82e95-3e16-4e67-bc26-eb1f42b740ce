
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import './Update.css'

export default function UpdatePage() {
  const [id,setId]=useState();
  const [capacity, setCapacity] = useState("");
  const [brand, setBrand] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    const det = {id, capacity,brand,details,amount };
     
    fetch(`http://localhost:8080/admin/updatePolicy/${id}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(det)
    }).then(() => {
      console.log("policy details updated");
    });
  };
  
  return (
   
        
    
    <div className='add-components'>
      <h1 className='title'>Update Policy</h1><br/>
      <TextField 
         style = {{width: 400}} 
         id="filled-basic" 
         label="Update Policy By ID" 
         variant="filled" 
         value={id}
         onChange={(e)=>{
           setId(e.target.value)}}/><br/>
        <TextField 
         style = {{width: 400}} 
         id="filled-basic" 
         label="Engine Capacity (CC)" 
         variant="filled" 
         border="white"
         value={capacity}
         onChange={(e)=>{
           setCapacity(e.target.value)}}/><br/>
        <TextField 
        style = {{width: 400}} 
        id="filled-basic" 
        label="Car Brand" 
        variant="filled" 
        value={brand}
        onChange={(e)=>{
          setBrand(e.target.value)}}/><br/>
        <TextField 
        style = {{width: 400}} 
        id="filled-basic"
         label="Details About Policy" 
         variant="filled" 
         value={details}
         onChange={(e)=>{
           setDetails(e.target.value)}}/><br/>
        <TextField 
        style = {{width: 400}}
         id="filled-basic" 
         label="Premium Amount"
          variant="filled" 
          value={amount}
          onChange={(e)=>{
            setAmount(e.target.value)}}/><br/>
        <Button variant="contained" color="success" className='add-btn' onClick={handleUpdate}>
                Update
            </Button>
            
    </div>
   
  )
}
