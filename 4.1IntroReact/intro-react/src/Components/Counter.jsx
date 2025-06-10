import React, { useState } from "react";
import '../css/Counter.css'

export default function Counter (){

    const [counter, setCounter] = useState(0);

    function handleSubstractButton(){
        if(counter <= 0){
            return
        }
        setCounter(counter -1);
    }

    function handleAddingButton () {
        setCounter (counter + 1);
    }

    return(
        <div className="counter-container">
            <button onClick={() => handleSubstractButton()}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => handleAddingButton()}>+</button>
        </div>
    )
}