import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'

export default function DeletePage() {
  const [id, setId] = useState();
  const handleDelete = (e) => {
    e.preventDefault();


    fetch(`http://localhost:8080/admin/deletePlan/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify()
    }).then(() => {
      alert('Policy Deleted');
    });
  };

  return (
    <div className='add-components'>
      <h1 className='title'>Delete Policy</h1><br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Delete Policy By ID"
        variant="filled"
        value={id}
        onChange={(e) => {
          setId(e.target.value)
        }} /><br />
      <Button variant="contained" color="success" className='add-btn' onClick={handleDelete}>
        Delete
      </Button>
    </div>

  )
}
