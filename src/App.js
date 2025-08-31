import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Landing_page from './Components/Landing_Page/Landing_page'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path='/' element={<Landing_page/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
