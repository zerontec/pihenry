import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';




export default function Landing(){



return(

    <div>

<header className="hero">
    

    <section className="container hero__main">  
        <div className="hero__textos">
            <h1 className="title">La mejor <span className="title--active">Experiencia  Vivela.</span></h1> 
            <p className="copy">Conoce las Mejores Recetas <span className="copy__active">Dietas de Alto nivel </span></p>
            <Link to='/Home' className="cta">Vamos</Link>
        </div>

    

        <video id="video-background" width="560" height="315" autoplay preload muted>
  <source src="video.mp4" type='video/mp4; codecs="avc1,mp4a"' />
  <source src="video.ogv" type='video/ogg; codecs="theora,vorbis"' />
  <source src="video.webm" type='video/webm; codecs="vp8,vorbis"' />
</video>
        <img src="images/mockup.png" className="mockup" alt='imagen comida'/>
    </section>
</header>


    </div>
)


}