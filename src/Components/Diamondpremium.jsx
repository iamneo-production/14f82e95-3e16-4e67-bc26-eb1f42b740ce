import React from 'react'
import { Link } from 'react-router-dom';

export default function 
() {
  return (
    <>
    <div class="container">
        <form class="col mb-3">
            <div class="row mb-3">
            <label for="validationServer03" class="form-label">Car Number*</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
            <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide the Number of your car.
    </div>
    </div>
    <div class="row mb-3">
    <label for="validationServer04" class="form-label">Select your policy</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected>Choose...</option>
      <option value="1">Policy One</option>
      <option value="2">Policy Two</option>
      <option value="3">Policy Three</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a policy.
    </div>
    </div>
    <div class="row mb-3">
    <label for="validationServer04" class="form-label">Select the tome range</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected>Choose...</option>
      <option value="1">3 months</option>
      <option value="2">6 months</option>
      <option value="3">1 year</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a time raqnge.
    </div>
    </div>


    
  <div class="col-12">
  <Link to="/Paymentpage">
    <button  class="btn btn-outline-dark btn-lg" type="submit">Submit</button>
    </Link>
  </div>
  
        </form>

        </div></>
  )
}
