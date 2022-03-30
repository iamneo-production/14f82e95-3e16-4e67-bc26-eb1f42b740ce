import React from 'react'
import { Link } from 'react-router-dom';

export default function PremiumPlans() {
  return (
    <div class="container">
        <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="./car4.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Policy title 1</h5>
        <p class="card-text">Policy Description</p>
      </div>
      <div class="card-footer">
      <Link to="/PremiumForm">
    <button  class="btn btn-warning" type="submit">Click here</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./car-car.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Policy title 2</h5>
        <p class="card-text">Policy Description</p>
      </div>
      <div class="card-footer">
      <Link to="/PremiumForm">
    <button  class="btn btn-warning" type="submit">Click here</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./red-car.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Policy title 3</h5>
        <p class="card-text">Policy Description</p>
      </div>
      <div class="card-footer">
      <Link to="/PremiumForm">
    <button  class="btn btn-warning" type="submit">Click here</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./car4.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Policy title 4</h5>
        <p class="card-text">Policy Description</p>
      </div>
      <div class="card-footer">
      <Link to="/PremiumForm">
    <button  class="btn btn-warning" type="submit">Click here</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./car-car.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Policy title 5</h5>
        <p class="card-text">Policy Description</p>
      </div>
      <div class="card-footer">
      <Link to="/PremiumForm">
    <button  class="btn btn-warning" type="submit">Click here</button>
    </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./red-car.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Policy title 6</h5>
        <p class="card-text">Policy Description.</p>
      </div>
      <div class="card-footer">
      <Link to="/PremiumForm">
    <button  class="btn btn-warning" type="submit">Click here</button>
    </Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
