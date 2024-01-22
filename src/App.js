import './assets/css/style.css';
import React from 'react';

import Home from './pages/home/Home';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Shop from './pages/shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './layout/Layout';
import Watch from './pages/watch/Watch';
import Hot from './pages/hot/Hot';
import Explore from './pages/explore/Explore';
import Newfeed from './pages/newfeed/Newfeed';
import AuthLayout from './pages/auth/AuthLayout';


function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route element={<Layout/>}>
                <Route path="/newfeed" element={<Newfeed />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/watch" element={<Watch />}/>
                <Route path="/watch/:str" element={<Watch />}/>
                <Route path="/hot" element={<Hot />}/>
                <Route path="/Explore" element={<Explore />}/>
                <Route path="/profile/:int" element={<Newfeed />}/>
              </Route>
              <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>                  
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
