import React, { useState, useEffect } from "react";
import {Header} from '../../home/Header';
import {Timer} from '../subcomponents1/Timer';
import { getPosts } from "../../../firebase/firestore";
import ReactPlayer from "react-player";

export const Security = () => {

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
      <section className="p-5">
        <h2 className="text-center mb-5 azul">DÍAS SIN ACCIDENTES</h2>
        <Timer />
      </section>
      <section id="experiencia" className="Event-list">
        <h2 className="text-center mb-5 azul">
          GANADORES CAMPAÑA MEDIO AMBIENTE
        </h2>
        <div className="container-experiencia">
          {posts.map((post) =>
            post.status === "publicado" &&
            post.subcategory === "Ganadores de Campaña del Medio Ambiente" ? (
              <article className="event">
                <figure className="event-imageContainer">
                  <div className="flexible-video">
                    <ReactPlayer
                      className="youtube-video react-player"
                      url="https://www.youtube.com/watch?v=0XT8AgWmuaE"
                      playing
                      muted
                      width="560"
                      height="315"
                    />
                  </div>
                </figure>
                <div className="event-detail">
                  <h3 className="event-title">{post.title}</h3>
                  <p className="event-description">{post.content}</p>
                  <a className="event-url" href={post.video}>
                    Ver pláctica
                  </a>
                </div>
              </article>
            ) : (
              null
            )
          )}
        </div>
      </section>
    </>
  );
}