import React from 'react'
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App