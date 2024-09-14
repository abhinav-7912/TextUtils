import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // added Navigate for redirect

function Home({ showAlert, mode }) {
  return (
    <div className="container my-4">
      
    </div>
  );
}

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'dark');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#042743';
    localStorage.setItem('mode', mode);
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    showAlert(`Dark mode ${newMode === 'dark' ? 'enabled' : 'disabled'}`, newMode === 'dark' ? 'success' : 'danger');
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="TextUtils- Word Counter, Character Counter" mode={mode} />
        <div className="container my-3">
          <Routes>
            <Route path="#" element={<Home showAlert={showAlert} mode={mode} />} />
            {/*<Route path="/about" element={<About mode={mode} />} />*/}
            {/* Add a route to redirect to Home if no route matches */}
            <Route path="*" element={<Navigate to="/" />} /> 
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
