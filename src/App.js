import React from 'react'
import Home from './pages/Home';
import Bmi from './pages/Bmi';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coach from './pages/Coach';
import Footer from './components/footer/Footer';
import Excercises from './pages/Excercises';
import Excercise from './pages/Excercise';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/coach/:id" element={<Coach />}/>
          <Route path="/bmi" element={<Bmi />}/>
          <Route path="/excercises" element={<Excercises />} />
          <Route path="/excercise/:id" element={<Excercise />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App