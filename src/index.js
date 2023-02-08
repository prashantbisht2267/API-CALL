import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM  from 'react-dom';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout"
import Home from "./home"
import {Outlet,Link} from 'react-router-dom';

const App=()=>{
 
    
    return(
       <> 
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/:layoutid" element={<Layout />}>
      </Route>
    </Routes>
  </BrowserRouter>
  </>     )   
    
}




ReactDOM.render(<App/>, document.getElementById('root'));