import React from "react";
import "../css/SquareContainer.css"

export default function SquareContainer ({children}) {
    return(
    <div className="container">
        {children}
    </div>
    )
}