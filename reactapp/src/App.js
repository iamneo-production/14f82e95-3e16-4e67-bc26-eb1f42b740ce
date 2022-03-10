import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import Policy from './components/pages/Policy';
import SignUp from './components/pages/SignUp';
import Plans from './components/pages/Plans';
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
      <Route path='/user/signup' element={<SignUp/>} />
    </Routes>
    </Router>
  
    </>
     

  );
}

export default App;
