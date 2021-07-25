import React from "react";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../images/CarruselSalud.jpg";
import Peru from "../../images/FiestaPatrias.jpg";
import Curso1 from "../../images/Curso.jpg";

export const Carrousel = () => {

  return (
    <>
      <section className="d-block ">
        <Carousel style={{width:"100%"}}>
        <Carousel.Item interval={1000} style={{width:"100%"}}>
          <img id='briSlider'
            className="d-block w-100"
            src={Carousel1}
            alt="Salud y Bienestar"
            style={{ objectFit:'contain', width:"100%" }} 
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}  style={{width:"100%"}}>
          <img id='briSlider'
            className="d-block w-100"
            src={Peru}
            alt="Fiestas patrias"
            style={{ objectFit:'contain',width:"100%" }} 
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}  style={{width:"100%"}}>
          <img id='briSlider'
            className="d-block w-100"
            src={Curso1}
            alt="Curso"
            style={{ objectFit:'content', width:"100%" }} 
          />
        </Carousel.Item>
      </Carousel>   
    </section>
    </>
  );
};
