import React, {  useState } from 'react'
import { TextField, Button } from "@mui/material";
import { Paper } from '@mui/material';





export default function Profile() {
  
  
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [id,setId]=useState('')
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [details, setDetails] = useState([])

  
//To view userprofile
  const handleView=()=>{
    fetch(`http://localhost:8080/user/viewProfile/${firstname}`)
    .then(res=>
      res.json())
    .then((data)=>{
      setDetails(data)
      console.log(data)
    })
    
    }

//to view userpolicy
const [ownername, setOwnername] = useState('');
const [mypolicy, setMypolicy]=useState([]);
const handlePolicy=()=>{
  fetch(`http://localhost:8080/user/payment/${ownername}`)
  .then(res=>
    res.json())
  .then((data)=>{
    setMypolicy(data)
    console.log(data)
  })
  
  }

  //to edit profile details
  const handleUpdate = (e) => {
    e.preventDefault();
    const det = {id, firstname,lastname,address,phonenumber };
     
    fetch(`http://localhost:8080/user/updateProfile/${id}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(det)
    }).then(() => {
      alert("user details updated");
    });
  };

  return (<>
    <div class='column'>
    <div className='add-components'>
      <h1>User Profile</h1>
      <br/>
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="View Profile By Confirming First Name"
        variant="filled"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <br />
      <Button
        variant="contained"
        color="success"
        className="add-btn"
        onClick={handleView}

      >
        View
      </Button>
      <Paper elevation={3} style={paperStyle}>

        {details.map(user => (
          <Paper elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={user.id}>


            Id : {user.id}<br/>
            FirstName : {user.firstname}<br />
            LastName : {user.lastname}<br />
            Address : {user.address}<br />
            Phone Number : {user.phonenumber}


          </Paper>
        ))
        }
      </Paper>
      <div className="add-components1">
      <h1 className="title">Edit User Details</h1>
      <br />
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="Enter Your ID to Edit Profile"
        variant="filled"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
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
      <Button
        variant="contained"
        color="success"
        className="add-btn1"
        onClick={handleUpdate}

      >
        Update File
      </Button>
      </div>
    </div>
    </div>



    <div class="column">
      <div className='add-components'>
    <h1>View Applied Policy</h1>
      <br/>
      <TextField
        style={{ width: 400 }}
        id="filled-basic"
        label="View Applied Policy By Confirming First Name"
        variant="filled"
        value={ownername}
        onChange={(e) => {
          setOwnername(e.target.value);
        }}
      /><br/>
      <Button
        variant="contained"
        color="success"
        className="add-btn1"
        onClick={handlePolicy}

      >
        View Applied Policy
      </Button>
      <Paper elevation={3} style={paperStyle}>

        {mypolicy.map(user => (
          <Paper elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={user.id}>


            
            Owner Name : {user.ownername}<br />
            Car Brand : {user.carbrand}<br />
            Car Color : {user.carcolor}<br />
            Premium Valid : {user.years}year <br/>
            Amount Payed : {user.preamt}

          </Paper>
        ))
        }
      </Paper>
    </div>
    </div>
    </>
  )
}
