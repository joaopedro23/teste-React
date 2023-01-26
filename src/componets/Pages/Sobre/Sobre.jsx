import React, {useEffect,useState }from 'react'
import { useParams } from 'react-router-dom'

import './sobre.css'

import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import Card from '../../Cards/Card'


export default function Sobre() {

  const movieUrl = import.meta.env.VITE_API
  const ApiKey = import.meta.env.VITE_API_KEY
  const imagesURL = import.meta.env.VITE_IMG;

  const {id} = useParams()

  const [movie, setMovie] = useState(null) 

  const GetSeachMovie = async (url) =>{
    const res = await fetch (url);
    const data = await res.json();
      setMovie(data)
  }
  useEffect( ()=> {
      const MovieUrl = `${movieUrl}${id}?${ApiKey}`
      GetSeachMovie(MovieUrl)
  }, [] )

  return (
    <>
    
        <h1 className='detalhes-filme'>Detalhe do Filme</h1>
        <h1>{movie && 
        <>{
          movie.title
        }
         <div className='post-page' style={{backgroundImage:`url(${imagesURL}${movie.poster_path})`}}>
         
         </div>
         <p className='descriçao-sobre'>Descriçao:{movie.overview}</p>
        </>
        }
       </h1>

        
       
  
    </>
  )
}
