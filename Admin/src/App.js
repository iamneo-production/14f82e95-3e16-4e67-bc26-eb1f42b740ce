
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import ViewUser from './Components/ViewUser';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Plans from './Components/Plans';
import AddPage from './Components/AddPage';
import ViewPage from './Components/ViewPage';
import UpdatePage from './Components/UpdatePage';
import DeletePage from './Components/DeletePage';

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>} />
    
      <Route path='/admin/viewUser' element={<ViewUser/>} />
      <Route path='/admin/plans' element={<Plans/>} />
      <Route path='/admin/addPolicy' element={<AddPage/>} />
      <Route path='/admin/viewPolicy' element={<ViewPage/>} />
      <Route path='/admin/updatePolicy' element={<UpdatePage/>} />
      <Route path='/admin/deletePolicy' element={<DeletePage/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;