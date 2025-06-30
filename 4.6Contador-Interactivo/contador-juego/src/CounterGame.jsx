import { useReducer, useEffect, useRef, useState } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
    switch (action.type) {
    case "increment":
        return {
        count: state.count + action.payload,
        history: [
            ...state.history,
            `+${action.payload} (Nuevo valor: ${state.count + action.payload})`,
        ],
        };
    case "decrement":
        return {
        count: state.count - 1,
        history: [
            ...state.history,
            `-1 (Nuevo valor: ${state.count - 1})`,
        ],
        };
    case "reset":
        return { count: 0, history: [] };
    case "undo": {
        if (state.history.length === 0) return state;
        const lastEntry = state.history[state.history.length - 1];
        const value = parseInt(lastEntry);
        const operation = lastEntry.startsWith("+") ? -value : +value;
        return {
    count: state.count + operation,
    history: state.history.slice(0, -1),
    };
}
    case "loadState":
        return {
            count: action.payload.count ?? 0,
            history: action.payload.history ?? [],
        };
    default:
        return state;
    }
}

function CounterGame() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [incrementValue, setIncrementValue] = useState(1);
    const incrementBtnRef = useRef(null);

    useEffect(() => {
        incrementBtnRef.current?.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("counterState", JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        const stored = localStorage.getItem("counterState");
        if (stored) {
            const parsed = JSON.parse(stored);
            dispatch({ type: "loadState", payload: parsed });
        }
    }, []);

    return (
    <div>
        <h2>Contador: {state.count}</h2>

        <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(Number(e.target.value))}
            style={{ marginRight: "8px" }}
        />

        <button
            ref={incrementBtnRef}
            onClick={() => dispatch({ type: "increment", payload: incrementValue })}
        >
        +
        </button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "undo" })}>Deshacer</button>

        <h3>Historial de cambios:</h3>
        <ul>
            {state.history.map((entry, index) => (
            <li key={index}>{entry}</li>
            ))}
        </ul>
        </div>
    );
}

export default CounterGame;