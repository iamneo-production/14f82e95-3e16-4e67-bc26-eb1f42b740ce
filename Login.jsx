import React from 'react'
import './LogIn.css';
import '../../App.css';

export default function Login() {
    return (
        <div className="log-in">
            <div className='loginForm'>

                <div className="loginHeader">
                   
                </div>

                <div className="boxingLogin">
                    
                    <div className='userCredentialsArea'>
                        
                    <h3 className='loginArea'>Login</h3>
                        <form className='loginUser'>
                            <div className='userLoginCredential' id='email'>
                                <input type='email' placeholder='Enter email' className='inputArea'></input>

                            </div>
                            <div className='userLoginCredential' id='password' >
                                <input type='password' placeholder='Enter password' className='inputArea'></input>

                            </div>
                            <div className="buttonForLogin">

                                <button className="loginButton">Login</button>

                            </div>




                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
