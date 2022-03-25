import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function UpdtDelete() {
    const [id,setId]=useState();
    const [name, setName] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [pan, setPan] = useState("");
    const [license, setLicense] = useState("");
    const [carnum, setCarnum] = useState("");
    const [address, setAddress] = useState("");

    //To Update
  const handleUpdate = (e) => {
    e.preventDefault();
    const updtdet = {id, name, aadhar, pan, license, carnum, address };
     
    fetch(`http://localhost:8080/user/updateDocs/${id}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updtdet)
    }).then(() => {
      alert("user docs updated");
    });
  };

  //To delete
  const handleDelete = (e) => {
    e.preventDefault();


    fetch(`http://localhost:8080/user/deleteDocs/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify()
    }).then(() => {
      alert('Documents Deleted');
    });
  };
    return (
        <>
        <div class="column">
            <div className="add-components">
                <h1>Update Documents</h1><br />
                <TextField
                    style={{ width: 400 }}
                    id="filled-basic"
                    label="Update Policy By ID"
                    variant="filled"
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value)
                    }} /><br />
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
                    onClick={handleUpdate}
                >
                    Upload
                </Button>
            </div>
        </div>
        <div class='column'>
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
    </div>
        </>
    )
}
