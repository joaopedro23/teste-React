import React, { Link } from 'react'
import './Card.css'

import { 

    FiPlusCircle, 
    FiStar,
    FiPlayCircle 
} from 'react-icons/fi' 

const imagesURL = import.meta.env.VITE_IMG;


export default function Card({movie, showLink = true }) {
  console.log(movie.id)
  return (

    <div className='movie-card'>

              {/* <FiPlusCircle className='fav-btn'/> */}
            <div className='div-icon'>

                <div className='post-image' style={{backgroundImage:`url(${imagesURL}${movie.backdrop_path})`}}>
                    {/* <img src={imagesURL + movie.backdrop_path} alt={movie.title} />  */}
                </div>
                <div className="card-detalhe">
                    <FiStar className='star-detalhe'/>
                    <div>
                      {movie.vote_average }
                      </div> movie.vote_average
                    <h2 className='titulo-movie'>{movie.title}</h2>
                        <h4> Ano de lançamento:{movie.release_date}</h4>
                </div>
                   
                   {showLink && <a href={`/Sobre/${movie.id}`} className='btn-detalhe'><FiPlayCircle/>detalhes </a>}
            </div>
              
    </div>

    
  )
}

