import React from "react";
import { Container } from "react-bootstrap";
import "./Contacto.css";

export const Contacto = () => {
  return (
    <div>
      <section className="contacto container main">
        <Container>
          <div className="contacto__texto">
            <h2>CONTÁCTANOS</h2>
            <p>
              Hablemos por{" "}
              <a href="https://www.instagram.com">Instagram</a> o{" "}
              <a href="https://www.whatsapp.com/?lang=es">
                WhatsApp
              </a>
              .
            </p>
          </div>
        </Container>

        <div className="contacto__redes">
          <div>
            <a href="https://www.instagram.com" target="_blanck">
              <i className="fab fa-instagram fa-5x"></i>
            </a>
            <a
              href="https://www.instagram.com/sunwater.ar/"
              className="contacto__redes--texto"
              target="_blanck"
            >
              @CerveceriaNogal
            </a>
          </div>
          <div>
            <a
              href="https://www.whatsapp.com/?lang=es"
              target="_blanck"
            >
              <i className="fab fa-whatsapp fa-5x"></i>
            </a>
            <a
              href="https://www.whatsapp.com/?lang=es"
              className="contacto__redes--texto"
              target="_blanck"
            >
              CerveceriaNogal
            </a>
          </div>
        </div>
      </section>

      <section className="redes">
        <div className="redes__div">
          <h2>SEGUINOS EN INSTAGRAM</h2>
          <h2 className="redes__div--dots">. . . . . </h2>
          <div className="redes__div--instagram">
            <a href="https://www.instagram.com" target="_blanck">
              <i className="fab fa-instagram-square fa-5x"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blanck"
              className="redes__div--instagram--link"
            >
              @CerveceriaNogal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
