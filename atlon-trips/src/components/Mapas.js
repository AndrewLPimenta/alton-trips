import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
    const [pontos, setPontos] = useState([]);
    const [mapa, setMapa] = useState(null);

    useEffect(() => {
        const getPontos = async () => {
            const response = await fetch('http://localhost:3002/');
            const dados = await response.json();
            setPontos(dados);
        };
        getPontos();
    }, []);

    useEffect(() => {
        if (pontos.length > 0 && !mapa) {
            const mapaInstance = L.map('mapa').setView([-22.9068, -43.1729], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
                subdomains: ['a', 'b', 'c'],
            }).addTo(mapaInstance);
            setMapa(mapaInstance);
            pontos.forEach((ponto) => {
                L.marker([ponto.lat, ponto.lng]).addTo(mapaInstance);
            });
        }
    }, [pontos]);

    return (
        <div id="mapa" style={{ height: '600px', width: '800px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}></div>
    );
};

export default Mapa;