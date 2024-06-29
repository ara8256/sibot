import React from "react";
import "./hero.css"

import video from './video.mp4'

const Hero = () =>{
    return(
        <div className="hero-section d-flex align-items-center justify-content-center hero " id = "">
        <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container overlay-content">
        <h1 className="display-4 text-white hero-font">Smart Innovative bots</h1>
        <p className="lead text-white">Empowering Conversations with AI</p>
        <button className="btn btn-outline-light btn-lg">Discover</button>
      </div>
      </div>
    )
}

export default Hero