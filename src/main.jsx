import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';

import Home from './views/Home.jsx';
import Error from './views/Error.jsx';
import Contact from './views/Contact.jsx';
import News from "./views/News.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<Error />}/>
            </Routes>
        </div>
    </BrowserRouter>
  </React.StrictMode>,
)
