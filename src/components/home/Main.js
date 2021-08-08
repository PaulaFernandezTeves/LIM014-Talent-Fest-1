import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getPosts } from "../../firebase/firestore";
import { ModalHome } from "../modal/ModalHome"

export const Main = () => {

  const img = "https://i.ibb.co/xjqVx2m/becas.jpg";
  const [posts, setPosts] = useState([]);

  const callback = (data) => {
    setPosts(data);
  };

  useEffect(() => {
    getPosts(callback);
  }, []);

  console.log(posts)    



  const renderSwitch = (param) => {
    switch (param) {
      case "Para Ti - Cronograma de capacitación":
        return <i className="fas fa-user-graduate azulclaro fa-3x"></i>;
      case "Para Ti - Convocatorias Internas":
        return <i className="fas fa-user-friends azulclaro fa-3x"></i>;
      case "Para Ti - Beneficios":
        return <i className="far fa-thumbs-up azulclaro fa-3x"></i>;
      case "Para Ti - Actividad":
        return <i className="far fa-calendar-alt azulclaro fa-3x"></i>;
      default:
        return null;
    }
  }

  return (
    <>
      {/* Sección Para Ti */}
      <section className="p-5" style={{ background: "#ECF2F6" }}>
        <h2 className="text-center azul mb-4">PARA TI</h2>
        <div className="section-content-fy">
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Para Ti - Cronograma de capacitación" ? (
              <Card
                style={{ width: "160px", height: "220px" }}
                key={post.postId}
              >
                <div className="figure-healht">{renderSwitch(post.subcategory)}</div>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <ModalHome post={post} />
                </Card.Body>
              </Card>
            ) : null
          )}
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Para Ti - Convocatorias Internas" ? (
              <Card
                style={{ width: "160px", height: "220px" }}
                key={post.postId}
              >
                <div className="figure-healht">{renderSwitch(post.subcategory)}</div>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <ModalHome post={post} />
                </Card.Body>
              </Card>
            ) : null
          )}
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Para Ti - Beneficios" ? (
              <Card
                style={{ width: "160px", height: "220px" }}
                key={post.postId}
              >
                <div className="figure-healht">{renderSwitch(post.subcategory)}</div>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <ModalHome post={post} />
                </Card.Body>
              </Card>
            ) : null
          )}
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Para Ti - Actividad" ? (
              <Card
                style={{ width: "160px", height: "220px" }}
                key={post.postId}
              >
                <div className="figure-healht">{renderSwitch(post.subcategory)}</div>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <ModalHome post={post} />
                </Card.Body>
              </Card>
            ) : null
          )}
        </div>
      </section>

      {/* Sección Noticias destacadas del mes */}
      <section style={{ background: "#b1d2e6" }} className="p-5">
        <h2 className="text-center azul mb-4">NOTICIAS DESTACADAS DEL MES</h2>
        <div className="section-content-fy">
          {posts.map((post) =>
            post.status === "publicado" &&
            post.subcategory === "Noticias Destacadas" ? (
              <Card
                style={{
                  width: "288px",
                  height: "300px",
                }}
                key={post.postId}
              >
                <figure className="figure-healht">
                  <img src={img} alt="img not found" />
                </figure>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
            ) : null
          )}
        </div>
      </section>

      {/* Sección Reconocimiento de la semana*/}
      <section className="p-5">
        <h2 className="text-center azul mb-4">RECONOCIMIENTOS DE LA SEMANA</h2>
        <div className="section-content-fy">
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Cumpleaños" ? (
              <Card style={{ width: "18rem" }} key={post.postId}>
                <figure className="figure-healht">
                  <img src={img} alt="img not found" />
                </figure>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
            ) : null
          )}

          {posts.map((post) =>
            post.status === "publicado" &&
            post.subcategory === "Otros Reconocimientos" ? (
              <Card style={{ width: "18rem" }} key={post.postId}>
                <figure className="figure-healht">
                  <img src={img} alt="img not found" />
                </figure>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
            ) : null
          )}
        </div>
      </section>
    </>
  );
};