import React from 'react'
import './plans.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

export default function Plans() {
    return (
        <div className='plan' >

            <div className='button'>
                <div className='splbtn'>
                    <Link to='/admin/addPolicy' className='link'>
                        <Button variant="contained" color="success" className='btn'>
                            Add Policy
                        </Button></Link><br />
                    <Link to='/admin/updatePolicy' className='link'>
                        <Button variant="outlined" color="success" className='btn'>
                           <b>Update Policy </b> 
                        </Button></Link><br />
                    <Link to='/admin/viewPolicy' className='link'>
                        <Button variant="contained" color="success" className='btn'>View Policy</Button></Link><br />
                    <Link to='/admin/deletePolicy' className='link'>
                        <Button variant="outlined" startIcon={<DeleteIcon />} className='btn' color="success">
                           <b> Delete Policy </b>
                        </Button></Link>
                </div>
            </div>
        </div>

    )
}
