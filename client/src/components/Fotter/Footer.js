import React from "react";
import './Footer.css'





export default function Footer(){


return (

    <div>
 <footer className="footer">
        <div className="container footer__caption">
            <section className="download">
                <h3 className="title__footer">Descarga nuestra App</h3>
                <div className="download__app">
                    <div className="download__item">
                        <i className='bx bxl-apple download__logo' ></i>
                        <h4 className="download__title">App Store</h4>
                    </div>
                    <div className="download__item">
                        <i className='bx bxl-play-store download__logo' ></i>
                        <h4 className="download__title">Play Store</h4>
                    </div>
                </div>
                <div className="footer__copy">
                    <p className="copyright">AlexCG &copy; 2020 Todos los derechos reservados</p>
    {/* 
                    <a href="#" className="politica__privacidad politica__privacidad--margin">Politica de privacidad</a>
                    <a href="#" className="politica__privacidad ">Terminos y condiciones</a> */}
                </div>
            </section>
            <section className="get-email">
                <h3 className="title__footer">¿Estás listo para trabajar con nosotros?</h3>
                <form className="newsletter newsletter--modifier">
                    <input type="text" className="newsletter__input" placeholder="Ingresa tu email"/>
                    <input type="submit" className="newsletter__submit" value="Comienza hoy"/>
                </form>
                <div className="socialmedia">
                    <p className="socialmedia__legend">Siguenos en:</p>
                    <i className='socialmedia__icon bx bxl-facebook-circle'></i>
                    <i className='socialmedia__icon bx bxl-linkedin-square'></i>                                                                                                        
                    <i className='socialmedia__icon bx bxl-twitter' ></i>   
                    <i className='socialmedia__icon bx bxl-instagram' ></i>
                    <i className='socialmedia__icon bx bxl-github' ></i>  
                </div>
            </section>
        </div>

        <div className="contact">
            <div className="item__contact">
                <i className='bx bx-copyright contact__icon' ></i>
                <h3 className="contact__title">AlexCG Design</h3>
            </div>
            <div className="item__contact">
                <i className='bx bx-mail-send contact__icon' ></i>
                <h3 className="contact__title">hola@alexcgdesign</h3>
            </div>
            <div className="item__contact">
                <i className='bx bxs-edit-location contact__icon' ></i>
                <h3 className="contact__title">Paseos de la reforma</h3>
            </div>
            <div className="item__contact item__contact--gold">
                <i className='bx bxs-chat contact__icon contact__icon--modifier' ></i>
                <h3 className="contact__title">Contactanos ahora</h3>
            </div>
        </div>
    </footer>


    </div>
    

)


}