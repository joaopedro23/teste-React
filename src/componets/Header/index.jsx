import React, {useState, useEffect} from "react";
import "./index.css"


import { FiMenu,FiSearch } from 'react-icons/fi'

export default function IndexHeader() {

  const [menuOpen, setMenuOpen]= useState(true)
  const [busca, setbusca]= useState("")
  

useEffect( ()=>{

window.addEventListener('resize',()=>{
  if(window.innerWidth > 764 )
  {
    setMenuOpen(true)
  }
  
})
}, [])


    return (
      <header>

        <div className="header_logo_contanier">
        <h2 className="header_Logo"> eu sou a logo</h2>
            <FiMenu size={24} className="HamburgueIcon" onClick={()=>{
              setMenuOpen(!menuOpen)
            }}/>
        </div>
        <div className="InputType">
        <input 
            type="text" 
            placeholder="Pesquisar"
            className="Input_Lupa"  
            value={busca}
            onChange={(e)=> setbusca(e.target.value)}/>
                 <a className="Seach-btn " href="#">
                  <FiSearch/>
                   </a>
                   
        </div>

        {menuOpen && (

        <nav>
          <ul>
            <li><a href="/Sobre">Sobre</a></li>
            <li><a href="/lacamentos">Home</a></li>
           
          </ul>
        </nav>

        )}

      </header>

)}
