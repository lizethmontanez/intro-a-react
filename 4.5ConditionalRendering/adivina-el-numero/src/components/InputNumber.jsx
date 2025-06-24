import React from 'react';

const InputNumber = ({ value, onChange, onSubmit, disabled }) => {
const handleKeyPress = (e) => {
    if (e.key === 'Enter') onSubmit();
};

return (
    <div>
        <input
            type="number"
            placeholder="Ingresa un número del 1 al 100"
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyPress}
            disabled={disabled}
        />
        <button onClick={onSubmit} disabled={disabled}>Adivinar</button>
    </div>
);
};

export default InputNumber;
