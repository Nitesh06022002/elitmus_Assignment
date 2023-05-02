import React, { useState, useEffect } from 'react';

const PuzzleTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Render the timer with the elapsed time
  return (
    <div className="puzzle-timer">
      Time: {elapsedTime} seconds
    </div>
  );
};

export default PuzzleTimer;
