import React from 'react'
import Home from './pages/Home';
import Bmi from './pages/Bmi';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coach from './pages/Coach';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/coach/:id" element={<Coach />}/>
          <Route path="/bmi" element={<Bmi />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App