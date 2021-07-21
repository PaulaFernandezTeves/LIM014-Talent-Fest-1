import React from 'react';
import { ModalReviewPost } from "./ModalReviewPost";
import { Header } from '../home/Header';

export function ReviewPost() {
    return (
        <>
          <Header />
            COMPONENTE DE REVIEW POST QUE ES UNA TABLA DE POSTS Y TENDRA UN MODAL PARA QUE ADMIN APRUEBE, RECHCE Y TMB EDITE
          <ModalReviewPost />           
        </>
    )
}