import React from 'react'
import './404.css'
import Scarecrow from './Scarecrow.png'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
         <header>
        <h1>404  Page Not Found</h1>
    </header>

    <section className="hero">
        <div className="hero-img">
            <img src={Scarecrow} alt="Scarecrow 404 not found image"/>
        </div>
        <div className="hero-description">
            <h1 className="title">I have bad news for you</h1>
            <p className="title-desc">The page you are looking for might be removed or is temporarily unavailable</p>

            <Link to={'/login'} >Back to Homepage</Link>
            
        </div>
    </section>
   
    </div>
  )
}

export default NotFound