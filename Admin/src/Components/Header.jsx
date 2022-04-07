import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Four Wheeler Insurance</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <Link to='/admin/plans' className='planLink'>
                <a class="nav-link" >Plans</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link to='/admin/viewUser' className='planLink'>
                <a class="nav-link"  >View User</a>
              </Link>
            </li>

            
          </ul>
          {/* <form class="d-flex">
        <li class="nav-item">
          <a class="nav-link" href='#'>Logout</a>
        </li>
      </form> */}
        </div>
      </div>
    </nav>
  )
}
