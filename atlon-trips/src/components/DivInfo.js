import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { div } from 'framer-motion/client';

export default function DivInfo() {
    return (

        <div className="details">
            <h1>Viaje, desfrute de momentos de lazer e aproveite ao máximo com a Atlon Transportes.</h1>
            <h5>Tenha a disponibilidade de nossos servicos na palma da sua mão!</h5>

            <button class="shadow__btn">
                Fale conosco!
            </button>
        </div>
    );
}