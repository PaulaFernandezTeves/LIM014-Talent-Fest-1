import React from "react";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../images/CarruselSalud.jpg";
import Carousel2 from "../../images/FiestaPatrias.jpg";
import Carousel3 from "../../images/Curso.jpg";

export const Carrousel = () => {

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="carosul-img d-block w-100" src={Carousel1} alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className=" carosul-img d-block w-100 " src={Carousel2} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className=" carosul-img d-block w-100" src={Carousel3} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};