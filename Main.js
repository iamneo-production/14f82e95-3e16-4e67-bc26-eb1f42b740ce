import React from 'react'

export default function Main() {
  return (
  <>
    <h1>           </h1>
    <p>     </p>
    <div class="container">
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter the applicant name</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Enter the applicant address</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter the applicant mobile</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter the applicant date of purchase(mm/dd/yy)</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter vehicle number</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter vehicle model</label>
</div>
<div class="input-group">
  <input type="text" class="form-control" placeholder="Is insurance expired?" aria-label="Recipient's username with two button addons"/>
  <button type="button" class="btn btn-outline-success">Yes</button>
  <button type="button" class="btn btn-outline-danger">No</button>
</div>
</div>
  </>

  )
}
