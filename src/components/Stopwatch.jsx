import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // State to track time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // State to track if stopwatch is running

  // This useEffect runs every time 'isRunning' or 'time' changes
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Increase time every 10ms
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Convert time into minutes, seconds, and milliseconds format
  const formatTime = () => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);
    return `${minutes < 10 ? '0' + minutes : minutes} : ${
      seconds < 10 ? '0' + seconds : seconds
    } : ${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
  };

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>
      <div style={styles.timeDisplay}>{formatTime()}</div>
      <div style={styles.buttons}>
        <button style={styles.startButton} onClick={() => setIsRunning(true)}>Start</button>
        <button style={styles.stopButton} onClick={() => setIsRunning(false)}>Stop</button>
        <button style={styles.resetButton} onClick={() => { setTime(0); setIsRunning(false); }}>Reset</button>
      </div>
    </div>
  );
};

// Styles with background image and colors for buttons
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.qnWeU_e1Mc7Dpluhj7GQ0wHaFo&pid=Api&P=0&h=180)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  },
  timeDisplay: {
    fontSize: '3rem',
    margin: '20px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '10px',
    borderRadius: '10px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  startButton: {
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  stopButton: {
    backgroundColor: '#f44336', // Red
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  resetButton: {
    backgroundColor: '#008CBA', // Blue
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Stopwatch;
