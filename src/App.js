import React, { useEffect }from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import usePageTracking from "./hooks/usePageTracking";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';


function App (){
  // usePageTracking();
  useEffect(() => {
    document.title = "Sammi Web Dev";
  }, []);
  return (
    <div className='App'>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;