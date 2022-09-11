import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
