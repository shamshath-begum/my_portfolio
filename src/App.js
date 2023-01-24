
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css'


function App() {
  return <>
  <div className='App'></div>
  <BrowserRouter>
  <NavBar/>
    <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/education' element={<Education/>}/>
<Route path='/projects' element={<Projects/>}/>
    </Routes>
 
  </BrowserRouter>
  </>
}

export default App;
