import React from 'react'
import entolactis from '../logo.svg'
import { FaHome } from 'react-icons/fa';
function Navbar() {
  return (
    <nav>
      <div className="contenedor-nav">
        <div className="logo">
          <img src={entolactis } alt="" /></div>
        <div className="menu">
          <ul>
            <li><FaHome /></li>
          
            <li>SALUD INTESTINAL</li>
          <li>Protege lo bueno en ti</li>
            <li>LACTOBACILLUS CASEI DG </li>
            <li>Blog</li>
          
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar