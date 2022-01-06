import { connect } from 'react-redux';
import React from 'react';
import {getRecipes} from '../../actions';
import { bindActionCreators } from 'redux';




function  Contact ({getRecipes}) {

 
        return(

            <div>

<section className="email container container--modifier">
            <h2 className="subtitle subtitle--modifier"><span className="point">.</span></h2>

            <p className="copy__section copy__section--modifier">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, et dolore id necessitatibus quibusdam rem accusamus fugiat doloremque voluptatibus eius!</p>

            <div className="check">
                <div className="check__item">
                    <i className='bx bx-check' ></i>
                    <div className="check__numbers">
                        <p className="check__number">texto</p>
                        <p className="check__copy">Texto </p>
                    </div>
                </div>
                <div className="check__item">
                    <i className='bx bx-check' ></i>
                    <div className="check__numbers">
                        <p className="check__number">text</p>
                        <p className="check__copy">Texto </p>
                    </div>
                </div>
                <div className="check__item">
                    <i className='bx bx-check' ></i>
                    <div className="check__numbers">
                        <p className="check__number">text</p>
                        <p className="check__copy">Texto </p>
                    </div>
                </div>
            </div>
            <form className="newsletter">
                <input type="text" className="newsletter__input" placeholder="Enter your Email "/>
                <input type="submit" className="newsletter__submit" value="Started"/>
            </form>
        </section>

            </div>
        )

    }




function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

/* function mapDispatchToProps(dispatch) {
  //aqui despacho la respuesta estado modif
  return bindActionCreators({ getRecipes }, dispatch);
  /*  return {
      getRecipes: (id) => dispatch(getRecipes(id)), //de las actions
    }; */

  

export default connect(mapStateToProps,{getRecipes}) (Contact)