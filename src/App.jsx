import { useState } from 'react'
import './App.css'
import {  BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'

import IndexHeader from './componets/Header'
import Lacamentos from './componets/Pages/lançamentos/lacamentos'
import Sobre from './componets/Pages/Sobre/Sobre';
import SobrePag from './componets/Pages/Sobre/SobrePag'

function App() {
  
  return (
    <div className="App">
      <IndexHeader/>

        <BrowserRouter>
        <NavLink to='/lacamentos' className='nav-link'> Lançamentos</NavLink>
        <NavLink to='/Sobrepag' className='nav-link'> Sobre</NavLink>

          <Routes>
          <Route path="/Sobrepag" 
            element={<SobrePag/>}>        
            </Route>
            
            <Route path="/" 
            element={<Lacamentos/>}>        
            </Route>

            <Route path="/Lacamentos" 
            element={<Lacamentos/>}>        
            </Route>

            <Route path="/Sobre/:id" 
            element={<Sobre/>}>        
            </Route>

            
          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
