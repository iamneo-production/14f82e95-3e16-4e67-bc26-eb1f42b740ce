import { useState, useEffect } from 'react'
import { Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import './viewuser.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TextField from '@mui/material/TextField';


export default function ViewUser() {
  const useStyles = makeStyles((theme) => ({
    deleteIcon: {
      '& svg': {
        fontSize: 50

      }
    }
  }))
  const classes = useStyles()
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/admin/viewUserDetails")

      .then(res => res.json())
      .then((result) => {
        setUsers(result);
      }
      )
  }, [])
  const [id, setId] = useState();

  const handleDelete = (e) => {
    e.preventDefault();


    fetch(`http://localhost:8080/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify()
    }).then(() => {
      alert('User Deleted');
    });
  };
  return (
    <div>

      <h1 className='title-user fw-light text-white m-0' >User List</h1>


      <Paper elevation={3} style={paperStyle}>

        {users.map(user => (
          <Paper elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={user.id}>


            Id:{user.id}<br />
            FirstName:{user.firstname}<br />
            LastName:{user.lastname}<br />
            Address:{user.address}<br />
            Phone Number:{user.phonenumber}


          </Paper>
        ))
        }
       <div className='tags'>
        <TextField
          style={{ width: 400 }}
          id="filled-basic"
          label="Delete User By ID"
          variant="filled"
          value={id}
          onChange={(e) => {
            setId(e.target.value)
          }} />
        <IconButton className={classes.deleteIcon}>

          <DeleteOutlinedIcon className='deleteicon' onDoubleClick={handleDelete} />
        </IconButton>
        </div>
        </Paper>
      
    </div>
  )
}
