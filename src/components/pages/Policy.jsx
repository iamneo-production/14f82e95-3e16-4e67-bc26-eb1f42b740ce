import React from 'react'
import { Link } from 'react-router-dom';

export default function Policy() {
  return (
    <div class="container" style={{backgroundColor: "lightblue" ,height:"100vh" ,width:"100%"}}>
      
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
     
      <div class="row  row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-75 w-75">
            <img src='/images/silver-premium.jpg' class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Silver premium</h5>
              <p class="card-text">No Discounts and Offers</p>
            </div>
            <div class="card-footer ">
              <Link to="/user/viewPolicy">
                <button class="btn btn-secondary" type="submit">Get Silver premium</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-75 w-75 ">
            <img src="/images/gold-premium.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Gold premium</h5>
              <p class="card-text">Basic premium is for 3 years 1 Year GST is 100% discount</p>
            </div>
            <div class="card-footer mt-9">
              <Link to="/Goldpremium">
                <button class="btn btn-warning mt-5" type="submit">Get Gold premium</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-75 w-75">
            <img src="/images/diamond-logo.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Diamond premium</h5>
              <p class="card-text">Basic premium is 5 years 3 year GST is 100% discount</p>
            </div>
            <div class="card-footer">
              <Link to="/Diamondpremium">
                <button class="btn btn-info mt-5" type="submit">Get Diamond premium</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}




// import React from 'react';
// import '../../App.css';
// import '../pages/Policy.css'
// import { Link } from 'react-router-dom';
// export default function Products() {
//   return (
//     <div className='header'>
//       <main class="page-content">
//         <section class="section-80 section-md-0">
//           <div class="box-offer-wrap list-inline-dashed-lg">
//             <div class="section-sm-60 section-md-80 box-offer">

//               <span class="car-icon">
//                 <img
//                   src="/images/car-icon-1.png" width="250" height="200"
//                   alt="car-icon"
//                 />
//               </span>
//               <Link class="d-inline-block d-md-block" to='/user/details' className='link'>
//                 <h5 class="offset-top-20">Policy Details</h5>
//               </Link>

//               <hr class="divider divider-xs bg-bermuda offset-top-20" />

//             </div>
//             <div class="section-sm-60 section-md-80 box-offer">

//               <span class="car-icon">
//                 <img
//                   src="/images/car-icon-3.png" width="200" height="200"
//                   alt="car-icon"
//                 />
//               </span>
//               <Link class="d-inline-block d-md-block" to='/user/login' className='link'>
//                 <h5 class="offset-top-20" className='titles'>Accidental Policies</h5>
//               </Link>
//               <hr class="divider divider-xs bg-bermuda offset-top-20" />

//             </div>
//             <div class="section-sm-60 section-md-80 box-offer">

//               <span class="car-icon">
//                 <img
//                   src="/images/car-icon-4.png" width="200" height="200"
//                   alt="car-icon"
//                 />
//               </span>
//               <Link class="d-inline-block d-md-block" to='/user/login' className='link'>
//                 <h5 class="offset-top-20">Claim Insurance</h5>
//               </Link>
//               <hr class="divider divider-xs bg-bermuda offset-top-20" />

//             </div>
//             <div class="section-sm-60 section-md-80 box-offer">

//               <span class="car-icon">
//                 <img
//                   src="/images/car-icon-5.png" width="200" height="200"
//                   alt="car-icon"
//                 />
//               </span>
//               <Link class="d-inline-block d-md-block" to='/user/plans' className='link'>
//                 <h5 class="offset-top-20" className='titles'>Policies and Plans</h5>
//               </Link>
//               <hr class="divider divider-xs bg-bermuda offset-top-20" />

//             </div>
//             <div class="section-sm-60 section-md-80 box-offer">

//               <span class="car-icon">
//                 <img
//                   src="/images/car-icon-6.png" width="200" height="200"
//                   alt="car-icon"
//                 />
//               </span>
//               <Link class="d-inline-block d-md-block" to='/user/login' className='link'>
//                 <h5 class="offset-top-20" className='titles'>Premium Plans</h5>
//               </Link>
//               <hr class="divider divider-xs bg-bermuda offset-top-20" />

//             </div>
//           </div>
//         </section>
//       </main>

//     </div>
//   )

// }