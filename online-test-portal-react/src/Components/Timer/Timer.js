import React, { useState, useEffect } from "react";
import styles from './Timer.module.css';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(60 * 60); // Downtime in seconds (60 minutes)

  useEffect(() => {
    // Set remaining time to 60 minutes on every render (including initial render)
    setRemainingTime(60 * 60);

    // Start a new interval on every render (including initial render)
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        // Do something when the timer reaches 0 (optional)
        console.log("Time Up");
        clearInterval(intervalId);
      }
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.container}>
      <p>Time: {formattedTime()}</p>
    </div>
  );
};

export default Timer;
