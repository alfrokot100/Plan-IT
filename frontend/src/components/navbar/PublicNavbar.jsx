import { Link } from "react-router-dom"
import { useState } from "react"
import "./PublicNavbar.css"


export default function PublicNavbar(){
  
    return(

   <nav className="navbar">
      <div >
        <h1 className="site-title"><Link to="/">BuildBoard</Link></h1>
      </div>

      <div className="links">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/log-in">Log In</Link></li>
        </ul>
      </div>
   </nav>
  )
}