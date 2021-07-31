import React, { useState, useEffect} from 'react';
import { Card } from "react-bootstrap";
import { useAuth } from "../../../context/AuthProvider";
import { getPosts } from "../../../firebase/firestore"
import { Header } from '../../home/Header';
import { ModalBenefit } from '../../modal/ModalBenefit';

export const Benefit = () => {

  const img = "https://i.ibb.co/xjqVx2m/becas.jpg";
  const { dataUser } = useAuth();

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
      {/*Becas*/}
      {dataUser.perfil === "Administrativos" ||
      dataUser.perfil === "Operativos" ? (
        <section className="p-5">
          <h2 className="text-center mb-5 azul">BECAS</h2>
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Becas" ? (
              <Card key={post.posId}>
                <Card.Body>
                  <div className="section-card">
                    <figure>
                      <img src={img} alt="img not found" />
                    </figure>
                    <div className="section-card-content">
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.content}</Card.Text>
                      <ModalBenefit post={post} />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <></>
            )
          )}
        </section>
      ) : null}

      {dataUser.perfil === "Administrativos" ||
      dataUser.perfil === "Operativos" ||
      dataUser.perfil === "Ejecutivos" ? (
        <>
          <section className="p-5" style={{ background: "#ECF2F6" }}>
            <h2 className="text-center mb-5 azul">FALLECIMIENTO</h2>
            {posts.map((post) =>
              post.status === "publicado" &&
              post.subcategory === "Fallecimiento" ? (
                <Card key={post.posId}>
                  <Card.Body>
                    <div className="section-card">
                      <figure>
                        <img src={img} alt="img not found" />
                      </figure>
                      <div className="section-card-content">
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                        <ModalBenefit post={post} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <></>
              )
            )}
          </section>
          {/* <section className="p-5">
            {posts.map((post) =>
              post.status === "publicado" &&
              post.subcategory === "Autoseguro" ? (
                <Card>
                  <Card.Body>
                    <div className="section-card">
                      <figure>
                        <img src={img} alt="img not found" />
                      </figure>
                      <div className="section-card-content">
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                        <Button
                          variant="primary"
                          href="https://www.youtube.com/watch?v=zQ41hqlV0Kk"
                        >
                          Ver mas
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <></>
              )
            )}
          </section> */}
        </>
      ) : null}
      {/*Linajes peruanos*/}
      <section className="p-5">
        <h2 className="text-center mb-5 azul">LINAJE PERUANO</h2>
        {posts.map((post) =>
          post.status === "publicado" &&
          post.subcategory === "Linajes Peruanos" ? (
            <Card key={post.posId}>
              <Card.Body>
                <div className="section-card">
                  <figure>
                    <img src={img} alt="img not found" />
                  </figure>
                  <div className="section-card-content">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <ModalBenefit post={post} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )
        )}
      </section>

      {/*Icpna*/}
      <section className="p-5" style={{ background: "#ECF2F6" }}>
        <h2 className="text-center mb-5 azul">ICPNA</h2>
        {posts.map((post) =>
          post.status === "publicado" && post.subcategory === "ICPNA" ? (
            <Card key={post.posId}>
              <Card.Body>
                <div className="section-card">
                  <figure>
                    <img src={img} alt="img not found" />
                  </figure>
                  <div className="section-card-content">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <ModalBenefit post={post} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )
        )}
      </section>
    </>
  );
}