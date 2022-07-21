import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Img0 from "../../../img/bg-shop.jpg";
import "../main.css";

export const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Img0} alt="First slide" />
          <Carousel.Caption>
            <h3 className="bg-dark">Cerveceria Nogal</h3>
            <p className="bg-dark">Una birra es igual a una Sonriza!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="main">
        <section className="solarizar">
          <h2>¿QUIENES SOMOS?</h2>
          <div className="solarizar__content">
            <div className="solarizar__content--text">
              <p>
              somos una micro cerveceria que nacio en la ciudad de buenos aires en el año 2002, al principio como el hobby de un grupo de amigos y hoy en dia con la unica motivacion de sorprender el paladar de nuestros clientes. tenemos nuestra fabrica principal ubicada en el gran buenos aires y contamos con el suministro de birra de calidad a mas de 40 locales en el gran buenos aires y C.A.B.A. Ademas puedes visitarnos en nuestros propios bares.
              </p>
              <p>
              contamos actualmente con un equipo de 200 colaboradores, todos capacitados y dispuestos en brindar atencion de claidad, cuando vas a nustros bares ademas de encontrar un ambiente con buena musica y una decoracion llamativa, tambien contaras con un personal experto en la buena birra, con las mejores recomendaciones de la casa. sino sabes aun que pobar, el camarero te ayduara.
              </p>
              <p>
              <strong>Un poco de Historia: </strong> Somos un Bar nacido en 2001 en la ciudad de buebnos aires, contamos con un grupo de amigos que se reunia a fabricar y catar birra por gusto, hasta que decidimos compartir nuestras delicias y experimentos. contando actuamente con tres bares en diferentes partes del pais(CABA,CORDOBA Y SALTA) y una aplia varidad de recetas para el paladar.
              </p>
            </div>
            <div className="solarizar__content--img img_radius"></div>
          </div>
        </section>

        <section className="codificar col-12">
          <h2>Nuestros bares:</h2>
          <div className="codificar__content">
            <div className="codificar__content--text">
              <ol>
                <li>
                <strong>CABA:</strong>
                  Nuestra primera cede cervecera en el emblimatico barrio de florestra, contamos con un espacio amplio y terraza, un lugar birrero con ambiente porteño. 
                </li>
                <li>
                <strong>CORDOBA:</strong>
                Nuestro bar en cordoba esta situado en un bario rustico rodeado de naturaleza, teniendo una plaza cerca, buen ambiente y muchos arboles para relajarse. ideal para descansar despues d eun dia movido.
                </li>
                <li>
                <strong>SALTA:</strong>
                Bar situado en salta capital, en un shopping donde pueden pasar a beber una birra luego de un dia lleno de compras.
                </li>
              </ol>
            </div>
            <div className="codificar__content--img img_radius"></div>
          </div>

          

          
        </section>
      </Container>
    </div>
  );
};
