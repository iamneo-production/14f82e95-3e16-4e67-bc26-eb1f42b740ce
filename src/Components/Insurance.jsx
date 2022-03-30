import React from 'react'
import { Link } from 'react-router-dom';

export default function insurance() {
  return (
    <div  class="container">
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <div class="row  row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="./gold-premium.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Gold premium</h5>
        <p class="card-text">Description</p>
      </div>
      <div class="card-footer">
      <Link to="/CCpage">
    <button  class="btn btn-warning" type="submit">Get Gold premium</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./silver-premium.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Silver premium</h5>
        <p class="card-text">Description</p>
      </div>
      <div class="card-footer">
      <Link to="/CCpage">
    <button  class="btn btn-secondary" type="submit">Get Silver premium</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./diamond-logo.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Diamond premium</h5>
        <p class="card-text">Description</p>
      </div>
      <div class="card-footer">
      <Link to="/CCpage">
    <button  class="btn btn-info" type="submit">Get diamond premium</button>
    </Link>
      </div>
    </div>
  </div>
</div>
     
</div>
      
  )
}
