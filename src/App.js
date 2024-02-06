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
import Saved from './pages/saved/Saved';
import Explore from './pages/explore/Explore';
import Newfeed from './pages/newfeed/Newfeed';
import AuthLayout from './pages/auth/AuthLayout';
import Short from './pages/watch/Short';
import Watching from './pages/watch/Watching';
import Watch from './pages/watch/Watch';
import Message from './pages/message/Message';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route element={<Layout/>}>
                <Route path="/newfeed" element={<Newfeed />}/>
                <Route path="/message" element={<Message />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route element={<Watch></Watch>}>
                  <Route path="/watch/:str" element={<Watching />}/>
                  <Route path="/watch" element={<WatchHome />}/>
                  <Route path="/watch/home" element={<WatchHome />}/>
                  <Route path="/watch/short" element={<Short />}/>
                </Route>
                <Route path="/saved" element={<Saved />}/>
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
