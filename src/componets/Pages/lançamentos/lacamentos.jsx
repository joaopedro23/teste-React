import React, { useEffect, useState } from 'react'
import'../../../App.css'
import Card from '../../Cards/Card'


export default function Lacamentos() {

    const movieUrl = import.meta.env.VITE_API
    const ApiKey = import.meta.env.VITE_API_KEY
    
    const [TopMovies, setTopMovies]= useState([])

    const getTopMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
       setTopMovies(data.results)
      
    }

    useEffect(()=>{
            const TopRatedMovie = `${movieUrl}top_rated?${ApiKey}`
            getTopMovies(TopRatedMovie)
            
    },[])


  return (  
    
    <div className='contanier' >
        
            <br></br>
                <div className='movies-contanier'>
                   {TopMovies.length > 0 && TopMovies.map((movie)=><Card key={movie.id} movie={movie}/>)}
                </div>
        
    
            
    </div>
    
  )
}
