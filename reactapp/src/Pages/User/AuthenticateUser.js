import React from 'react'
import {fetchUserData} from '../../Api/AuthenticationService';
import {useState} from 'react';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Style.css'


export const getFakeLogin=()=>{
    return( sessionStorage.getItem("loggedIn")==="user"?true:false)
}

function AuthenticateUser(){
    const [data,setData]=useState({});
    const usenavigate = useNavigate();


    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
           
        })
    },[])

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        sessionStorage.setItem("loggedIn","user");
        usenavigate('/user/dashboard');
    }


    return(
        <div >
        

        <p className="display-1">WELCOME</p>

        
        <p className="lead">
            If Your Unable To Find The Start Button You May Be Entered Wrong GateWay . This GateWay
            For Users ! Try To Re-Login 
        </p>





        
            <div className='auth'>
                {data && data.roles && data.roles.filter(value => value.roleCode==='USER'||value.roleCode==='ADMIN').length>0 && <Button onClick={handleSubmit} type="variant">Start :)</Button> }
            </div>
        </div>
    )
}

export default AuthenticateUser;