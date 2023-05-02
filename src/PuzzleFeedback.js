import React, { useContext } from 'react';
import { PuzzleContext } from './PuzzleContext';

const PuzzleFeedback = () => {
  const { puzzlePieces, elapsedTime } = useContext(PuzzleContext);

  const accuracy = calculateAccuracy(puzzlePieces);
  const completionTime = elapsedTime;

  const softSkills = assessSoftSkills(accuracy, completionTime);

  // Render the feedback with the soft skills
  return (
    <div className="puzzle-feedback">
      <p>Accuracy: {accuracy}%</p>
      <p>Completion time: {completionTime} seconds</p>
      <p>Soft skills assessed: {softSkills.join(', ')}</p>
    </div>
  );
};

export default PuzzleFeedback;
