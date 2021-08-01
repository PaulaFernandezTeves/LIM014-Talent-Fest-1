import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getPosts } from "../../../firebase/firestore";
import { Header } from "../../home/Header";

export const Health = () => {

  const img = "https://i.ibb.co/xjqVx2m/becas.jpg";
  const [posts, setPosts] = useState([]);

  const callback = (data) => {
    setPosts(data);
  };

  useEffect(() => {
    getPosts(callback);
  }, []);

  return (
    <>
      <Header />
      <section className="t-5">
        <h2 className="text-center mt-5 azul">CRONOGRAMA DE VACUNACIÓN</h2>
        <div className="section-content">
          {posts.map((post) =>
            post.status === "publicado" &&
            post.subcategory === "Cronograma de vacunación" ? (
              <Card style={{ width: "22rem" }} key={post.posId}>
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

      <section className="t-5" style={{ background: "#ECF2F6" }}>
        <h2 className="text-center pt-3 azul">RECOMENDACIONES</h2>
        <div className="section-content">
          {posts.map((post) =>
            post.status === "publicado" &&
            post.subcategory === "Recomendaciones" ? (
              <Card style={{ width: "22rem" }} key={post.posId}>
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

      <section className="mt-5">
        <h2 className="text-center  azul">ATENCIÓN NUTRICIONAL</h2>
        <div className="section-content">
          {posts.map((post) =>
            post.status === "publicado" &&
            post.subcategory === "Atención nutricional" ? (
              <Card style={{ width: "22rem" }} key={post.posId}>
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