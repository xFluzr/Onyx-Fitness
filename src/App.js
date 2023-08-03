import React from 'react'
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coach from './pages/Coach';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/coach/:id" element={<Coach />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App