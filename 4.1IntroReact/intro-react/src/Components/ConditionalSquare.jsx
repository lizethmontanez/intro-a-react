import { useState } from "react";
import "../css/ConditionalSquare.css"


export default function ConditionalSquare () {
    const [flag, setFlag] = useState(true);

    return (
        <div className={flag ? "redBox" : "blueBox"} onClick={() => setFlag(!flag)}>
            <h1>El estado de este cuadrado es: {flag ? <strong>Rojo</strong> : <strong>Azul</strong>}</h1>
        </div>
    )
}