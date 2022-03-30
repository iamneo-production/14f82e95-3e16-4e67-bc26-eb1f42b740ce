import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { FaCar,FaBars,FaTimes } from "react-icons/fa";
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Four Wheeler Insurance  <FaCar />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ?<FaTimes/>:<FaBars/>}
        </div>
        <ul className={click?'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
            <Link to='/user/policy' className='nav-links' onClick={closeMobileMenu}>
                Policies
            </Link>
            </li>
            <li className='nav-item'>
           <Link to='/user/documents' className='nav-links' onClick={closeMobileMenu}>
                Documents
            </Link>
            </li>
             <li className='nav-item'>
            <Link to='/user/profile' className='nav-links' onClick={closeMobileMenu}>
                Profile
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/user/login' className='nav-links' onClick={closeMobileMenu}>
                    Log-in
                </Link>
            </li>
            <li>
            <Link to='/user/signup' className='nav-links' onClick={closeMobileMenu}>
                    Sign-up
            </Link>
            </li>            
        </ul> 
       
       
        
        
        </div>
    </nav>
    </>
  );
}

export default Navbar