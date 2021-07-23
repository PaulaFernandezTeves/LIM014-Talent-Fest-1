import React from "react";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../images/CarruselSalud.jpg";
import Peru from "../../images/FiestaPatrias.jpg";
import Curso1 from "../../images/Curso.jpg";

export const Carrousel = () => {

  return (
    <>
      <section>
        <Carousel>
        <Carousel.Item interval={1000} >
          <img id='briSlider'
            className="d-block w-100 "
            src={Carousel1}
            alt="Salud y Bienestar"
            style={{ objectFit:'contain' }} 
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img id='briSlider'
            className="d-block w-100 "
            src={Peru}
            alt="Fiestas patrias"
            style={{ objectFit:'contain' }} 
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img id='briSlider'
            className="d-block w-100 "
            src={Curso1}
            alt="Curso"
            style={{ objectFit:'contain' }} 
          />
        </Carousel.Item>
      </Carousel>   
    </section>
    </>
  );
};
