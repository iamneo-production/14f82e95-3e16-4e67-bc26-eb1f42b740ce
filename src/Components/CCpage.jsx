import React from 'react'
import { Link } from 'react-router-dom';


export default function CCpage() {
  return (
    <div class="container">
        <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
        <form class="col mb-3">
            <h5>Please select your motor insurance*</h5>
        <div class="form-check">
        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
        <label class="form-check-label" for="validationFormCheck2">Less than 1000 cc</label>
    </div>
    <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
    <label class="form-check-label" for="validationFormCheck3">1000cc-1500cc</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
     </div>
     <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
    <label class="form-check-label" for="validationFormCheck3">More than 1500cc</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
     </div>
     <div class="col-12">
  <Link to="/PremiumPlans">
    <button  class="btn btn-primary" type="submit">Submit</button>
    </Link>
  </div>

        </form>
    </div>
  )
}
