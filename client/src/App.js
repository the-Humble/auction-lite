import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Catalogo from './pages/Catalogo';
import AuctionMain from './pages/AuctionMain';
import AuctionUser from './pages/AuctionUser';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import socketIO from 'socket.io-client';
import { useEffect, useState } from 'react';


const socket = socketIO.connect('http://localhost:4000');

const App = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const excludedRoutes = ['/login', '/register', '/'];

  useEffect(() => {
    if(excludedRoutes.includes(window.location.pathname)){
      setShowNavbar(false);
    }
    else
    {
      setShowNavbar(true);
    }
  },[window.location.pathname])

  return (
    <>
      <Router>
        {showNavbar && <Navbar socket = { socket }/>}
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            {
              isLoggedIn ?
              [
                  <>
                    <Route path="/catalogo" element={<Catalogo socket = {socket}/>}/>
                    <Route path="/subasta_actual" element={<AuctionMain socket={socket} />}/>
                    <Route path="/subasta_actual/subastar" element={<AuctionUser socket={socket} />}/>
                  </>
                ]
                : null
            }

            <Route path = {'*'} element = { <Navigate replace to={"/"}/>}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
