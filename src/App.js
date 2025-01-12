import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import './index.css';
import usePageTracking from "./hooks/usePageTracking";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Now inside Router context, usePageTracking works properly */}
        <PageTrackingWrapper />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// This ensures proper use of usePageTracking
const PageTrackingWrapper = () => {
  usePageTracking(); // Called within Router context
  useEffect(() => {
    document.title = "Sammi Web Dev";
  }, []);
  return null; // This component doesn't render anything
};

export default App;
