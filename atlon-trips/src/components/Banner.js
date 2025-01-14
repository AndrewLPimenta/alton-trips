import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
    return (
        <div className="banner">
            <img src={require('.././assets/Design sem nome.png')} alt="Banner" />
            <h1 className="banner-texto">Conheça mais <br />sobre os nossos <br/>serviços da Atlon.</h1>
        </div>
    );
}

