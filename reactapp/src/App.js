import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import Policy from './components/pages/Policy';
import SignUp from './components/pages/SignUp';
import Plans from './components/pages/Plans';
import Silverpremium from './components/pages/Silverpremium'
import GoldPremium from './components/pages/GoldPremium'
import Diamondpremium from './components/pages/Diamondpremium'
import UserDetails from './components/pages/UserDetails'
import Profile from './components/pages/Profile'
import Document from './components/pages/Document';
import Footer from './components/Footer';
import Paymentpage from './components/pages/Paymentpage';
import UpdtDelete from './components/pages/UpdtDelete';
function App() {
  return (
    <>
    <Router>
    <Navbar/>

    <Routes>
      <Route path='/' exact element={<Home/>}/>
     
      <Route path='/user/policy' element={<Policy/>} />
      
      <Route path='/user/login' element={<LogIn/>} />
      <Route path='/user/plans' element={<Plans/>} />
      <Route path='/user/viewPolicy' element={<Silverpremium/>} />
      <Route path='/Goldpremium' element={<GoldPremium/>} />
      <Route path='/Diamondpremium' element={<Diamondpremium/>} />
      <Route path='/user/userDetails' element={<UserDetails/>} />
      <Route path='/user/payment' element={<Paymentpage/>} />

      <Route path='/user/documents' exact element={<Document/>}/>
      <Route path='/user/updateDocs' exact element={<UpdtDelete/>}/>
      <Route path='/user/profile' exact element={<Profile/>}/>
      <Route path='/user/signup' element={<SignUp/>} />
    </Routes>
    {/* <Footer/> */}
    </Router>
  
    </>
     

  );
}

export default App;
