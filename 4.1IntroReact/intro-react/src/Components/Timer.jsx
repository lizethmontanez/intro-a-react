import React, {useState, useEffect} from "react";

export default function Timer (){
    const [time, setTime] = useState(0);
    const[active, setActive] = useState(false);

    useEffect(() => {
        let idInterval = null;

        if(active){
            idInterval = setInterval(() => {
                setTime(previousTime => previousTime + 1)
            }, 1000);
        }

        return () => {
            if(idInterval){
                clearInterval(idInterval);
            }
        }
    }, [active]);

    const toggleTimer = () => {
        setActive(!active);
    }

    const reset = () => {
        setActive(false);
        setTime(0);
    }

    return(
        <div>
            <h1>
                Timer: {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
            </h1>
            <div>
                <button onClick={() => toggleTimer()}>
                    {active ? "Pausar" : "Iniciar"} temporizador
                </button>
                <button onClick={() => reset()}>Reiniciar</button>
            </div>
        </div>
    )
}
