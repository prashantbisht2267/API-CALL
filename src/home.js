import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import Like from './like.jpeg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Outlet,Link} from 'react-router-dom';
import Layout from "./layout"
const Home = () => {
   const [movies, setMovies]=useState([]);
    const [find,setFind]=useState('');

    useEffect(()=>{
        getMovies();
    },[]);
    useEffect(()=>{
        getMovies();
    },[find]);
    let movieRequest
    const getMovies=async()=>{
        if(find.length>2){
            
            movieRequest=await axios.get(`https://www.omdbapi.com/?s=${find}&apikey=38af5159`);
            setMovies(movieRequest.data.Search);

           
        }
     else{
        movieRequest=await axios.get("https://www.omdbapi.com/?s=harry&apikey=38af5159");
        setMovies(movieRequest.data.Search);
     }
      
    }
    return(
       

    
        <div> 
         <h1 className='holly'>HOLLYWOOD</h1>
                  <input type="text" placeholder="Search your favourite movie" className='tt' value={find} onChange={(e)=>{setFind(e.target.value)}} /> 
                  <div className='container'> 
                 
                  { movies.length >0 ? movies.map(movie=>{
                   return ( 

                        <div className='c1' >
                           
                            <Link to={`/${movie.imdbID}`}>
                        <img src={movie.Poster} alt="image not reload" /> <br/>
                            <div> <img className='' src={Like} alt={` poster`} />  {movie.Title}</div>
                            
                            </Link> 
                             
                    </div>
                    )
               }): ''}
               </div>
                
                  
        
        </div>)
  };
  export default Home;