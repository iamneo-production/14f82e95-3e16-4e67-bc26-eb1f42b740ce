import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Insurance from './Components/Insurance'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CCpage from './Components/CCpage';
import Paymentpage from './Components/Paymentpage';
import PremiumForm from './Components/PremiumForm';
import PremiumPlans from './Components/PremiumPlans';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;