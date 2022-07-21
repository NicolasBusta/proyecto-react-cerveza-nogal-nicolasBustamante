import React from 'react';
import "./Footer.css";
import Logo from '../../img/logo.svg';

export const Footer = () => {
    return (
        <div className="footer cointainer bg-warning">

            <div className="footer__logo">

                <img src={Logo} alt="logo marca"/>
                <p>#SomosNogal</p>

            </div>

            <div className="footer__redes">

                <a href="https://www.instagram.com" target="_blanck" rel="noreferrer">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a href="https://www.whatsapp.com/?lang=es" target="_blanck" rel="noreferrer">
                    <i className="fab fa-whatsapp-square fa-2x"></i>
                </a>

            </div>

            <div className="footer__derechos-lugar">
                <p><i className="fas fa-map-marker-alt"></i> Argentina</p>
                <p>Cerveceria Nogal ® 2022</p>
            </div>

        </div>
    );
} 