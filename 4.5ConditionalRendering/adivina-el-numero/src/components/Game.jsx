import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';
import './Game.css'; 

const Game = () => {
const [targetNumber, setTargetNumber] = useState(null);
const [userGuess, setUserGuess] = useState('');
const [feedback, setFeedback] = useState('');
const [gameOver, setGameOver] = useState(false);
const [attempts, setAttempts] = useState(0); 

  useEffect(() => {
    setTargetNumber(generateRandomNumber());
  }, []);

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const handleGuess = () => {
      const guess = parseInt(userGuess);
      if (isNaN(guess)) {
        setFeedback('Por favor ingresa un número válido.');
        return;
      }

    setAttempts((prev) => prev + 1); 

    if (guess === targetNumber) {
      setFeedback(`¡Correcto! Lo lograste en ${attempts + 1} intentos`);
      setGameOver(true);
    } else if (guess < targetNumber) {
      setFeedback('El número es mayor');
    } else {
      setFeedback('El número es menor');
    }
  };

  const handleRestart = () => {
    setTargetNumber(generateRandomNumber());
    setUserGuess('');
    setFeedback('');
    setGameOver(false);
    setAttempts(0); 
  };

  return (
    <div className="game-container">
      <h1>Adivina el Número</h1>
      <p>Intentos: {attempts}</p>
      <InputNumber
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        onSubmit={handleGuess}
        disabled={gameOver}
      />
      <Message message={feedback} />
      {gameOver && <RestartButton onClick={handleRestart} />}
    </div>
  );
};

export default Game;