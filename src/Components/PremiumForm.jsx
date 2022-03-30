import React from 'react'
import { Link } from 'react-router-dom';

export default function PremiumForm() {
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
            <label for="validationServer03" class="form-label">Aadhar Number*</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
            <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide your Aadhar number.
    </div>
    </div>
    <div class="row mb-3">
            <label for="validationServer03" class="form-label">Pan Number*</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
            <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide your pan number.
    </div>
    </div>
    <div class="row mb-3">
    <label for="validationServer04" class="form-label">Select years of policy needed</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected>Choose...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a number.
    </div>
    </div>
    <div class="row mb-3">
    <label for="validationServer04" class="form-label">Select the time range for payment</label>
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
