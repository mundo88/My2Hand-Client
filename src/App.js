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
import WatchHome from './pages/watch/WatchHome';
import Hot from './pages/hot/Hot';
import Explore from './pages/explore/Explore';
import Newfeed from './pages/newfeed/Newfeed';
import AuthLayout from './pages/auth/AuthLayout';
import Short from './pages/watch/Short';
import WatchLayout from './layout/WatchLayout';
import Watching from './pages/watch/Watching';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route element={<Layout/>}>
                <Route path="/newfeed" element={<Newfeed />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/watch/:str" element={<Watching />}/>
                <Route element={<WatchLayout/>}>
                  <Route path="/watch" element={<WatchHome />}/>
                  <Route path="/watch/home" element={<WatchHome />}/>
                  <Route path="/watch/short" element={<Short />}/>
                </Route>
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
