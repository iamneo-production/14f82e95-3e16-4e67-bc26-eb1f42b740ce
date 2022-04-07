import React from 'react'
import './plans.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

export default function Plans() {
    return (
        <div className='plan' >
            <h1 class="fw-light text-white m-0">Admin</h1>

            <div className='button'>
                <div className='splbtn'>
                    <Link to='/admin/addPolicy' className='link'>
                        <Button variant="contained" color="success" className='btn'>
                            Add Policy
                        </Button></Link><br />
                    <Link to='/admin/updatePolicy' className='link'>
                        <Button variant="contained" color="info" className='btn'>
                            
                            Update Policy
                        </Button></Link><br />
                    <Link to='/admin/viewPolicy' className='link'>
                        <Button variant="contained" color="warning" className='btn'>View Policy</Button></Link><br />
                    <Link to='/admin/deletePolicy' className='link'>
                        <Button variant="contained" startIcon={<DeleteIcon />} className='btn'>
                            Delete Policy
                        </Button></Link>
                </div>
            </div>
        </div>

    )
}
