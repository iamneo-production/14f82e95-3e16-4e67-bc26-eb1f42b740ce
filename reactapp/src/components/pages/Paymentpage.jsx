
import { useState } from 'react'
import './payment.css'

export default function Paymentpage() {
  const [ownername,setOwnername]=useState('');
  const [carbrand,setCarbrand]=useState('');
  const [cc,setCC]=useState('');
  const [carnumber,setCarnumber]=useState('');
  const [carcolor,setCarcolor]=useState('');
  const [years,setYears]=useState('');
  const [preamt,setPreamt]=useState('');
const handlePayment=(e)=>{
     e.preventDefault();
     const payDetails={ownername,carbrand,cc,carnumber,carcolor,years,preamt}
     fetch("http://localhost:8080/user/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payDetails)
    }).then(() => {
      alert("Your payment succeded and policy added");
    });
}
  return (
    <div>
      <div>
        <div class="wrapper">
          <h2>Billing Details</h2>
          <div id="error_message">

          </div>
          <form action="" id="myform" onsubmit="return validate();">
            <div class="input_field">
              <input type="text"
               placeholder="Owner name"
                id="name"
                 required 
                 value={ownername}
                 onChange={(e)=>{
                   setOwnername(e.target.value)
                 }}/>
            </div>
            <div class="input_field">
              <input type="text"
               placeholder="Car brand"
                id="subject" 
                required 
                value={carbrand}
                onChange={(e)=>{
                  setCarbrand(e.target.value)
                }}/>
            </div>
            <div class="input_field">
              <input type="text" 
              placeholder="Car CC number"
               id="phone" required
               value={cc}
               onChange={(e)=>{
                 setCC(e.target.value)
               }} />
            </div>
            <div class="input_field">
              <input type="text"
               placeholder="Car number" 
               id="email" required
               value={carnumber}
               onChange={(e)=>{
                 setCarnumber(e.target.value)
               }} />
            </div>
            <div class="input_field">
              <input type="text" 
              placeholder="Car color" 
              id="email" required 
              value={carcolor}
              onChange={(e)=>{
                setCarcolor(e.target.value)
              }}/>
            </div>
            <div class="input_field">
              <input type="text" 
              placeholder="Premium year"
               id="email" required 
               value={years}
               onChange={(e)=>{
                 setYears(e.target.value)
               }}/>
            </div>
            <div class="input_field">
              <input type="text" 
              placeholder="Confirm Amount"
               id="email" required 
               value={preamt}
               onChange={(e)=>{
                 setPreamt(e.target.value)
               }}/>
            </div>
            <div className="input_field">
              <input type="checkbox" id="terms" name="terms" required />
              <label for="terms">I Agree for Your Terms and conditions </label>
            </div>
            <div class="btn">
              <button className='confirm-button' onClick={handlePayment}> CONFIRM PAY </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
