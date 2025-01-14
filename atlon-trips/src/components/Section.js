import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

const cards = [
    {
        image: "https://t3.ftcdn.net/jpg/02/85/64/82/240_F_285648275_VAq7WTS7UmNAaeYbujhBPR5a8pZ6YT1t.jpg",
        title: "Conheça os melhores pontos turísticos da cidade maravilhosa",
        text: "Cristo Redentor",
        link: "https://api.whatsapp.com/send/?phone=5524999432515&text&type=phone_number&app_absent=0",
        buttonText: "Conferir Disponibilidade",
    },
    {
        image: "https://media.gettyimages.com/id/1730072976/pt/foto/rio-de-janeiro-brazil-an-aerial-view-of-the-maracana-stadium-on-october-11-2023-in-rio-de.jpg?s=612x612&w=0&k=20&c=zvblZQBWi_6VNJWOqZbdUVvLQM0eAoGVUB2QtmuR-kE=",
        title: "A emoção de assistir o seu time do coração jogando de perto",
        text: "Estádio Maracanã",
        link: "https://api.whatsapp.com/send/?phone=5524999432515&text&type=phone_number&app_absent=0",
        buttonText: "Conferir Disponibilidade",
    },
    {
        image: "https://media.gettyimages.com/id/542623252/pt/foto/sao-paulo-skyline-view-from-the-swimming-pool-at-the-unique-hotel-in-sao-paulo-brazil.jpg?s=612x612&w=0&k=20&c=F9Sa4ouZtIgwEYHxMZKQZ5l6Cb9OwbFo1sc95cwD0co=",
        title: "A grande metrópole nacional, aguarda sua visita!",
        text: "São Paulo",
        link: "https://api.whatsapp.com/send/?phone=5524999432515&text&type=phone_number&app_absent=0",
        buttonText: "Conferir Disponibilidade",
    },
    {
        image: "https://media.gettyimages.com/id/572304327/pt/foto/fans-with-raised-arms-at-music-festival.jpg?s=612x612&w=0&k=20&c=f_HOenMNzi46Q-yXQ8n0mW4y5rnOTEfDDlox02q6aQI=",
        title: "Assista o seu artista favorito com o melhor transporte!",
        text: "Eventos",
        link: "https://example.com/link",
        buttonText: "Conferir Disponibilidade",
    }
]

export default function Section() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.container', {
            x: 0,
            opacity: 1,
            rotate: 0,
            scale: 1, // ou rotate: 11, se você quiser uma rotação de 11 graus
            ScrollTrigger: {
                trigger: '.container',
                markers: true,
            }
        })

        return () => {
            gsap.killTweensOf('.container');
        }
    }, []);

    return (
        <section className='container'>
            <div className='text-mobile'>
                <div className='text-mobile-left'>
                    <h1>Somos quem te leva ao lugar certo,</h1>
                </div>
                <div className='text-mobile-right'>
                    <h1>Na hora que você achar a certa.</h1>
                </div>
                <div className='text-mobile-left'>
                    <h1>Veja os preferidos</h1>
                    <h2>De nossos clientes:</h2>
                </div>
            </div>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    text={card.text}
                    link={card.link}
                    buttonText={card.buttonText}
                />
            ))}
        </section>
    )
}