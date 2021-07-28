import React, { useState, useEffect} from 'react';
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../../context/AuthProvider";
import { getPosts } from "../../../firebase/firestore"
import { Header } from '../../home/Header';

export const Benefit = () => {

  const img = "https://i.ibb.co/xjqVx2m/becas.jpg";
  const { dataUser } = useAuth();
  console.log(dataUser)

  const [posts, setPosts] = useState([]);

  const callback = (data) => {
    setPosts(data);
  };

  useEffect(() => {
    getPosts(callback);
  }, []);

  return (
    <>
      <Header/>
      {/* /Becas/ */}
      { dataUser.perfil === "Administrativos" ||
      dataUser.perfil === "Operativos" ? (
        <section className="p-5">
          <h2 className='text-center mb-5 azul'>BECAS</h2>
          {posts.map((post) =>
            post.status === "publicado" && post.subcategory === "Becas" ? (
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
              null
            )
          )}
        </section>
      ) : null}

      {dataUser.perfil === "Administrativos" ||
      dataUser.perfil === "Operativos" ||
      dataUser.perfil === "Ejecutivos" ? (
        <>
          <section className="p-5">
          <h2 className='text-center mb-5 azul'>FALLECIMIENTO</h2>
            {posts.map((post) =>
              post.status === "publicado" &&
              post.subcategory === "Fallecimiento" ? (
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
                null
              )
            )}
          </section>
        </>
      ) : null}

      {/* /Linajes peruanos/ */}
      <section className="p-5">
      <h2 className='text-center mb-5 azul'>LINAJE PERUANO</h2>
        {posts.map((post) =>
          post.status === "publicado" &&
          post.subcategory === "Linajes Peruanos" ? (
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
            null
          )
        )}
      </section>

      {/* /Icpna/ */}
      <section className="p-5">
      <h2 className='text-center mb-5 azul'>ICPNA</h2>
        {posts.map((post) =>
          post.status === "publicado" && post.subcategory === "ICPNA" ? (
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
            null
          )
        )}
      </section>
    </>
  );
}