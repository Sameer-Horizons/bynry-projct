import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './ProfileList';
import './App.css';
import Top from './Top';
import './Bar.css';
import About from './About';
import Home from './Home';
import Addprofile from './Addprofile';
function App() {
  return (
    <>
   
      <Router>
        <div>
          <Top />
        </div>
        <div className="App">
          <Routes>
          <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Addprofile" element={<Addprofile />} />
            <Route path="/Profiles" element={<ProfileList />} />
            <Route path="/About" element={<About />} />
            <Route path="/button" element={<ProfileList/>} />
            <Route path="/createprofile" element={<Addprofile/>} />


            
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
