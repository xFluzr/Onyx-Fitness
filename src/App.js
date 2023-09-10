import React, { useState } from 'react'
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
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from "./firebase";
import ResetPassword from './pages/ResetPassword';
import Workouts from './pages/Workouts';
import NoPage from './pages/NoPage';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <>
      <BrowserRouter>
          <UserAuthContextProvider> 
            <Navbar loggedIn={loggedIn} />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/coach/:id" element={<Coach />}/>
                <Route path="/post/:id" element={<Post />}/>
                <Route path="/bmi" element={<Bmi />}/>
                <Route path="/offer" element={<Offer />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/excercises" element={<Excercises />} />
                <Route path="/excercise/:id" element={<Excercise />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/workouts" element={<Workouts loggedIn={loggedIn}/>} />
                <Route path="/profile" 
                      element={
                        <ProtectedRoute loggedIn={loggedIn}>
                          <Profile />
                        </ProtectedRoute>
                      } 
                />
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
          </UserAuthContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App