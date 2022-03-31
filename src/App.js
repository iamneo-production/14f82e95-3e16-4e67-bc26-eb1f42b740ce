<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
=======
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Insurance from './Components/Insurance'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CCpage from './Components/CCpage';
import Paymentpage from './Components/Paymentpage';
import PremiumForm from './Components/PremiumForm';
import PremiumPlans from './Components/PremiumPlans';
>>>>>>> premium

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header/>
      <Main/>
=======
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/CCpage' element={<CCpage/>} />
      <Route path='/insurance' element={<Insurance/>} />
      <Route path='/PremiumPlans' element={<PremiumPlans/>} />
      <Route path='/PremiumForm' element={<PremiumForm/>} />
      <Route path='/Paymentpage' element={<Paymentpage/>}/>
      </Routes>
      </Router>
>>>>>>> premium
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> premium
