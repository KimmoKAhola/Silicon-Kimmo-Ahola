import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';

import Navbar from "./views/sections/Navbar.jsx";
import Footer from './views/sections/Footer.jsx'
import Home from './views/Home.jsx'
import Error from './views/Error.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <div className="wrapper">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  </React.StrictMode>,
)
