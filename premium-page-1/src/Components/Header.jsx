import React from 'react'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Four Wheeler Insurance</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Premium Plans</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Renewals</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href='#'>Claims</a>
        </li>
      </ul>
      <form class="d-flex">
        <li class="nav-item">
          <a class="nav-link" href='#'>Logout</a>
        </li>
      </form>
    </div>
  </div>
</nav>
  )
}