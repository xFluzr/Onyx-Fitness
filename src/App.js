import React from 'react'
import Home from './pages/Home';
import Bmi from './pages/Bmi';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coach from './pages/Coach';
import Footer from './components/footer/Footer';
import Excercises from './pages/Excercises';
import Excercise from './pages/Excercise';
import Post from './pages/Post';
import Offer from './pages/Offer';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/coach/:id" element={<Coach />}/>
            <Route path="/post/:id" element={<Post />}/>
            <Route path="/bmi" element={<Bmi />}/>
            <Route path="/offer" element={<Offer />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/excercises" element={<Excercises />} />
            <Route path="/excercise/:id" element={<Excercise />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App