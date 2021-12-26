import React from "react";
import { Link } from "react-router-dom";
/* import './NavBar.css' */





export default function Navbar(){

return (

    <div>

<nav className="nav__hero">
        <div className="container nav__container">
            <div className="logo">
       <Link to={'/home'}   >  <h2 className="logo__name">Recetas<span className="point">.</span></h2></Link> 
            </div>
            <div className="links">
            <Link to={'/home'}   >       <a href="#" className="link">Inicio</a></Link>
                <a href="#" className="link">Nosotros</a>
            <Link to={'/recipe'} >  <a href="#" className="link">Crea tu Receta</a></Link> 
                
                <a href="#" className="link link--active">Contacto</a>
            </div>
        </div>
    </nav>

    </div>
)


}