import React from "react";
import { Card } from "react-bootstrap";
import cumpleanos from "../../images/cumpleanos.png";
// import {ModalDetails} from "../admin/ModalDetails"

export const Main = () => {
  // const [show1, setShow1] = useState(false);

  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);
  /* HACER CAMBIOS ACA DE MODAL PARA DETALLES */
  return (
    <>
      {/* PARA TI */}

      <section className="p-5">
        <h2 className="text-center mb-5 azul">PARA TI</h2>
        <article
          className="d-flex flex-wrap justify-content-between mx-auto"
          style={{ maxWidth: "70%" }}
        >
          <Card /*  onClick={handleShow1} */
            border="gris3 border-3"
            style={{ width: "14rem", borderRadius: "17px", height: "13rem" }}
            className="mb-4  mx-auto"
          >
            
            <figure className="mx-auto">
              <div className="briFa">
                <i className="fas fa-user-graduate azulclaro fa-3x"></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text
                style={{
                  color: "#003366",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Cronograma de capacitación
              </Card.Text>
              <div>
               {/*  <ModalDetails show1={show1} onHide1={handleClose1}/> */}
              </div>
            </Card.Body>
          </Card>
          <Card
            border="gris3 border-3"
            style={{ width: "14rem", borderRadius: "17px", height: "13rem" }}
            className="mb-4  mx-auto"
          >
            <figure className="mx-auto">
              <div className="briFa">
                <i className="fas fa-user-friends azulclaro fa-3x"></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text
                style={{
                  color: "#003366",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Convocatorias internas
              </Card.Text>
              <div>
                <a
                  className="briCardBtn"
                  target="_blank"
                  href="https://www.siderperu.com.pe/convocatorias-vigentes"
                  rel="noreferrer"
                >
                  Conoce más<i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card
            border="gris3 border-3"
            style={{ width: "14rem", borderRadius: "17px", height: "13rem" }}
            className="mb-4  mx-auto"
          >
            <figure className="mx-auto">
              <div className="briFa">
                <i className="far fa-thumbs-up azulclaro fa-3x"></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text
                style={{
                  color: "#003366",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Beneficios
              </Card.Text>
              <div>
                <a
                  className="briCardBtn"
                  target="_blank"
                  href="https://campus.siderperu.pe/"
                  rel="noreferrer"
                >
                  Conoce más<i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card
            border="gris3 border-3"
            style={{ width: "14rem", borderRadius: "17px", height: "13rem" }}
            className="mb-4"
          >
            <figure className="mx-auto">
              <div className="briFa">
                <i className="far fa-calendar-alt azulclaro fa-3x"></i>
              </div>
            </figure>
            <Card.Body>
              <Card.Text
                style={{
                  color: "#003366",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Actividad
              </Card.Text>
              <div>
                <a
                  className="briCardBtn"
                  target="_blank"
                  href="https://www.siderperu.com.pe/conocenos/contactenos"
                  rel="noreferrer"
                >
                  Conoce más<i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        </article>
      </section>

      {/* NOTICIAS DESTACADAS DEL MES */}
      <section style={{ background: "#ECF2F6" }} className="mx-auto">
        <h2 className="text-center m-5 azul pt-5">
          NOTICIAS DESTACADAS DEL MES
        </h2>
        <article
          className="d-flex flex-wrap justify-content-between mx-auto"
          style={{ width: "70%" }}
        >
          <Card
            style={{
              width: "27rem",
              borderRadius: "17px",
              height: "25rem",
              objectFit: "contain",
            }}
            className="mb-4"
          >
            {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
            <img
              src="https://3.imimg.com/data3/WD/WX/MY-4426420/ss304-steel-wire-rod-250x250.jpg"
              alt=""
              style={{ height: "75%", margin: "0" }}
              className="briNoticia"
            />
            <h4 className="card-title">RÉCORD LAMINACIÓN LARGOS </h4>
            <p className="card-text text-secondary">
              "Hemos logrado el récord máximo de producción en comparaciónd e
              los últimos 4 años."
            </p>

            {/* </Card.Text> */}
          </Card>
          <Card
            style={{
              width: "27rem",
              borderRadius: "17px",
              height: "25rem",
              objectFit: "contain",
            }}
            className="mb-4"
          >
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-plana-fiestas-patrias-peru_23-2148968396.jpg?size=626&ext=jpg"
              alt=""
              style={{ height: "75%", margin: "0" }}
              className="briNoticia"
            />
            <h4 className="card-title">FIESTAS PATRIAS</h4>
            <p className="card-text text-secondary">
              "Celebremos a lo grande nuestro Bicentenario del Perú."
            </p>
          </Card>
        </article>
      </section>

      {/* RECONOCIMIENTOS DE LA SEMANA */}
      <section className="p-5">
        <h2 className="text-center mb-5 azul">RECONOCIMIENTOS DE LA SEMANA</h2>
        <article
          className="d-flex flex-wrap justify-content-between mx-auto"
          style={{ maxWidth: "60%" }}
        >
          <Card
            style={{
              width: "50rem",
              borderRadius: "17px",
              height: "25rem",
              objectFit: "contain",
            }}
            className="mb-4 mx-auto"
          >
            {/* <Card.Text style={{fontWeight:'bold', color:'#874487', fontSize:'1.2rem', textAlign:'center' }} className="card-body"> */}
            <img
              src={cumpleanos}
              alt=""
              style={{ height: "75%", margin: "0" }}
              className="briNoticia"
            />
            <h4 className="card-title">"5 años laborando juntos" </h4>
            <p className="card-text text-secondary">
              "Nos sentimos orgullosos de ser parte de este gran equipo"
            </p>

            {/* </Card.Text> */}
          </Card>
        </article>
      </section>
    </>
  );
};
