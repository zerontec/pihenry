import React from "react";
import "./Deteil.css"
import Navbar from "../navBar/Navbar";

import { useEffect, useState } from "react";
import {useDispatch, useSelector} from  "react-redux"
import {getDetail} from '../../actions/index';
import Loading from "../Loading/Loading";

export default function  Detail (props) {

     const dispatch = useDispatch();
     const [cambio, setCambio] = useState(false);
     const detail = useSelector((state) => state.detail);

     useEffect(() => {
       dispatch(getDetail(props.match.params.id));
       setCambio(true);
     }, [props.match.params.id, dispatch]);
     




return (
  <div>
    <Navbar />
    <main>
      
      <section className="projects container">
        <h2 className="subtitle">
        Unique and True Recipes <span className="point">.</span>
        </h2>
        <p className="copy__section">
        Get to know the Detail and Animate to create yours
        </p>
       { detail.length ?(
        <article className="container-bg">
          <div className="card">
            <div className="cards__text">
              <h3 className="card__title">



                
              Name:  {detail[0].title} <span className="point">.</span>
              </h3>
              {detail[0].healthScore !== 0 ? (
                <p className="card__date">Health level: {detail[0].healthScore}</p>
              ) : (
                <p>Health level: -</p>
              )}
                {detail[0].aggregateLikes !== 0 ? (
                <p className="card__date"> Score: {detail[0].aggregateLikes}   </p>
                ) : (
                    <h3>Score: - </h3>
                  )}
            
                    

              
              <button  className="card__button">
              Add to Favorite
              </button>
            </div>
          </div>

          {/* imagen */}
          <div className="background">
            <img className="background__img" src={detail[0].image?( detail[0].image):( 
            
            <img
            src="https://previews.123rf.com/images/mackoflower/mackoflower1507/mackoflower150700380/42588917-variedad-de-ensaladas-populares-y-saludables-en-la-dieta-alimentos-collage-de-im%C3%A1genes.jpg"
            alt="img plate"
          /> )

       } />
           
          </div>
          <div className="caja">
         <h3>Recipe Summary </h3>
         <hr/>
              <p className="pd">{detail[0].summary.replace(/<[^>]*>?/g, "")}</p>

             

</div>

<div className="caja">

{detail[0].analyzedInstructions ? (
              <><h3>Step by step instructions: </h3><hr /></>
              
            ) : (
              <h3>Step by step instructions: - </h3>
            )}

            {detail[0].analyzedInstructions.length > 0 ? (
              <ul>
                {detail[0].createdDb ? (
                  <li>{detail[0].analyzedInstructions}</li>
                ) : (
                  detail[0].analyzedInstructions[0].steps.map((p) => (
                    <li key={p.number}>{p.step}</li>
                  ))
                )}
              </ul>
            ) : (
              <p></p>
            )}
            </div>

        </article>

):(
    <Loading/>
)}

      </section>
    </main>
      
  </div>
);



}