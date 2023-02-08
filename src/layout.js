import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM  from 'react-dom';
import './App.css'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import {Outlet,Link} from 'react-router-dom';


const Layout = () => {
    const [movies, setMovies]=useState([]);
    
const id=useParams();
{console.log(id.layoutid)}
   
    useEffect(()=>{
        getMovies();
    },[]);
    let movieRequest
    const getMovies=async()=>{
     
     
        movieRequest=await axios.get("https://www.omdbapi.com/?s=harry&apikey=38af5159");
        setMovies(movieRequest.data.Search);
     
      
    }
    const ourmovie=movies.find(item=>item.imdbID==id.layoutid);
    console.log(ourmovie)
    return(
       

    
        <div> 
            <p>{ourmovie.Title}</p>
       {/* <div className='movieBackdrop'>
          <div className='movieContainer'>
            <img className='moviePoster' src={ourmovie.Poster} alt={`poster`}/>
            <section className='movieInfo'>
              <p className='infoTitle'>Title: <span className='infoContent'> {ourmovie.Title}</span></p>
              <p className='infoTitle'>Type: <span className='infoContent'>{ourmovie.Type}</span></p>
              <p className='infoTitle'>Release Year: <span className='infoContent'>{ourmovie.Year}</span></p>
              <p className='infoTitle'>Genres: <span className='infoContent'>Action & Thriller</span></p>
              <div className='arrow-flex'>
                
              </div>
            </section>
          </div>
        </div> */}
                  
        {/* <img src={ourmovie.Poster} alt="image not reload" /> */}
                
                  
        
        </div>)
}
  export default Layout;

