import React from "react";
import { Link } from "react-router-dom";
/*  import './NavBar.css' ; */





export default function Navbar(){

return (

    <div>

<nav className="nav__hero">
        <div className="container nav__container">
            <div className="logo">
       <Link to={'/home'}   >  <h2 className="logo__name">Recipes<span className="point">.</span></h2></Link> 
            </div>
            <div className="links">
            <Link to={'/home'}   >       <a href="#" className="link">Home</a></Link>
                <a href="#" className="link">About</a>
            <Link to={'/recipe'} >  <a href="#" className="link">Create Recipe</a></Link> 
                
               <Link to={'/contact'}> <a className="link">Contact</a></Link>
            </div>
        </div>
    </nav>

    </div>
)


}