import React from 'react';
import { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister=(e)=>{
        e.preventDefault()
        const user={username,email,password}
        console.log(user)
        fetch("http://localhost:8080/user/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
     } ).then(()=>{
         console.log("new student added")
     })
        
    }
    
  return (<div className='sign-up'>
     
            <div className="signupHeader">
               
            </div>
        <div className="userAreaFeild">
       
            <div className='userDetailsArea'>
                 <h3 className='registerArea'>Register</h3>
                <form className='userForm'>
                     <div className='userCredential' id='admin/user'>
                    <input type='text' 
                    placeholder='Enter admin/user' 
                    className='inputs'
                    onChange={(e)=>{setUsername(e.target.value);}}
                    >
                    </input>

                    </div>
                     <div className='userCredential' id='email'>
                    <input type='email' 
                    placeholder='Enter email' 
                    className='inputs'
                    onChange={(e)=>{setEmail(e.target.value);}}
                    ></input>

                    </div>
                    <div className='userCredential' id='password' >
                    <input type='password' 
                    placeholder='Enter password' 
                    className='inputs'
                    onChange={(e)=>{setPassword(e.target.value);}}
                    ></input>

                     </div>
                     
                    <div className="buttonForRegister">
                    
                    <button className="registerButton"
                     onClick={handleRegister}
                    >Register</button>
                   
                    </div>
                   
                    <div className="existingUSer">
                    <Link to="/user/login" className='link'>
                        Existing user?login
                    </Link>
                        
                    </div>
                    </form>
            </div>
            
        </div>
      
        </div>
  )
}
