import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home({ showAlert, mode }) {
  return (
    <div className="container my-4">
      <TextForm showAlert={showAlert} heading="TextUtils- Word Counter, Character Counter" mode={mode} />
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
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    showAlert(`Dark mode ${mode === 'light' ? 'enabled' : 'disabled'}`, mode === 'light' ? 'success' : 'danger');
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
