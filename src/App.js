import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes'

import './App.css';


function App() {
  return (
    <div>
       <Router>
       <Routes/>
    </Router>
    </div>
  );
}

export default App;
