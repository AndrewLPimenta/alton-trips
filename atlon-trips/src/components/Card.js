import React, { useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Card(props) {
        return (
            <div className="card" style={{ width: '18rem', height: '25rem', boxShadow: '0 0 10px rgba(0, 0, 255, 0.1)' }}>
                <img src={props.image} className="card-img-top" alt="..." style={{ height: '15rem', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.link} className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
        );
    }