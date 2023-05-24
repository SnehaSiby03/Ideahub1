import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import First from './components/First';
import Lata from './components/Lata';
import Navbar from './components/Navbar';
import Apiget from './components/Apiget';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         < Route path='/' element={<StateBasics/>}/> 
          <Route path='/First' element={<First/>}/>  
         <Route path='/Lata' element={<Lata/>}/>
         <Route path='/Apiget'element={<Apiget/>}/>

      </Routes>
    </div>
  );
}

export default App;
