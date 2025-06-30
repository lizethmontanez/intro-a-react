import React from "react";
import "../assets/Styles/MainContent.css"

export default function MainContent ({children}) {
    return(
        <div className="main-content">{children}</div>
    )
}