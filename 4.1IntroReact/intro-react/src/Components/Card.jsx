import React from "react";
import '../css/Card.css'

export default function Card ({src, alt, text}) {
    return (
        <div className="card">
            <img src={src} alt={alt} />
            <p>{text}</p>
            <button>Like</button>
        </div>
    )
}