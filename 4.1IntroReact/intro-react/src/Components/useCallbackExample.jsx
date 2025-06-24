import React, {useState, useCallback, memo} from "react";

const Child = memo(({onClick}) => {
    console.log("Renderizado componente hijo");
    return (
        <button onClick={onClick}>Actualizar componente padre</button>
    )
})

export default function Parent () {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(current => current + 1);
    }, [])

    return (
        <div>
            <p>Contador: {count}</p>
            <Child onClick={increment}/>
        </div>
    )
}