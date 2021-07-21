import React from 'react';
import { Header } from './home/Header';
import { Carrousel } from '../components/home/Carrousel';
import { Main } from './home/Main';
import { Footer } from './home/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <Main />
      <Footer />
    </>
  );
}
