import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Landing_page from './Components/Landing_Page/Landing_page'
import Sign_Up from './Components/Sign_Up/Sign_Up'
import Login from './Components/Login/Login'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path='/' element={<Landing_page/>}></Route>
                <Route path='/sign-up' element={<Sign_Up/>}></Route>
                <Route path='/log-in' element={<Login/>}></Route>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
