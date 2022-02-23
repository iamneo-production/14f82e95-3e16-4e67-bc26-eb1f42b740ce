import React from 'react'
import './login.css';

export default function Login() {
    return (
        
        <div className='loginForm'>
            
            <div className="loginHeader">
                <h3 className='loginArea'>Login</h3>
            </div>
        
            <div className="boxingLogin">
            <div className='userCredentialsArea'>
                <form className='loginUser'>
                    <div className='userLoginCredential' id='email'>
                    <input type='email' placeholder='Enter email' className='inputs'></input>

                    </div>
                    <div className='userLoginCredential' id='password' >
                    <input type='password' placeholder='Enter password' className='inputs'></input>

                    </div>
                    <div className="buttonForLogin">
                    
                    <button className="loginButton">Login</button>
                   
                    </div>
                   
                  
                        
                
                </form>
            </div>
            </div>
        </div>
       
       
    )
}
