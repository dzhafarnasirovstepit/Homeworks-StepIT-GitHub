import { useState } from 'react';
import ButtonStart from './ButtonStart';
import ButtonPC from './ButtonPC';
import ButtonStop from './ButtonStop';

const Timer = () => {

const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const [intervalId, setIntervalId] = useState(null);

const startTimer = () => {
  setIsRunning(true);
  const id = setInterval(() => {
    setTime((prevTime) => prevTime + 0.01);
  }, 10);
  setIntervalId(id);
};

const pauseContinueTimer = () => {
  if (isRunning) {
    clearInterval(intervalId);
    setIsRunning(false);
  } else {
    startTimer();
  }
};

const stopTimer = () => {
  if (isRunning) {
    clearInterval(intervalId);
  }
  setIsRunning(false);
  setTime(0);
};

return (
  <div>
    <p>Time: {time.toFixed(2)} s</p>
    <ButtonStart onClick={startTimer} />
    <ButtonPC isRunning={isRunning} onClick={pauseContinueTimer} />
    <ButtonStop onClick={stopTimer} />
  </div>
);
};

export default Timer;