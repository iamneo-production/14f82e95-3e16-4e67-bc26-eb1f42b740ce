import React from 'react';
import { Link } from 'react-router-dom';

export default function 
Main() {

  return (
    <>
    <div class="container">
        <form class="col mb-3">
            <div class="row mb-3">
            <label for="validationServer03" class="form-label">Email Address*</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
            <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid Email id.
    </div>
    </div>
    <div class="row mb-3">
            <label for="validationServer03" class="form-label">Mobile Number</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
            <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid Phone Number.
    </div>
    </div>
    <div class="row mb-3">
            <label for="validationServer03" class="form-label">Vehicle Registration</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
            <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide Vehicle Reg. Id.
    </div>
    </div>
  <div class="col-12">
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div id="validationServer03Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
  <Link to="/insurance">
    <button  class="btn btn-outline-dark btn-lg" type="submit">Submit</button>
    </Link>
  </div>
        </form>

        </div></>
  )
}
