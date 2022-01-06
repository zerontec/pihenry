import React from 'react'
import "./Card.css"




export default function  Card ({title, image, diets, vegetarian, score, healthScore})  {

return(

    <div>



<article className="container-bg">


<div className="card">
                       
                        <div className="cards__text">
                        <h3 className="card__title">{title}<span className="point">.</span></h3>
                            <p className="card__list">Types of diets</p>
                            <li className="card__list pdh">{diets}
                            {vegetarian}
                            </li>
                           
                            
                            <p className="card__copy">Score:</p>
                            <p className="card__copy">{score}</p>
                           {/*  <a href="#" className="card__button">Ir Al Detalle</a> */}

                            <p className="card__copy">Heald Score:</p>
                            <p className="card__copy">{healthScore}</p>
                        </div>
                    </div>
                    <div className="background">
                    <img src={image} className="background__img"/>
                    <div class="background__text">
                        <h3 class="background__titlec">{title}</h3>
                        <p class="background__copy"></p>
                    </div>
                </div>
               
                </article>




    </div>
 )


}