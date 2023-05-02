import React, { useState } from 'react';

const PuzzleBoard = () => {
  const [puzzlePieces, setPuzzlePieces] = useState([jnjbb,jjuou,images]);

  // Render the puzzle board with the puzzle pieces
  return (
    <div className="puzzle-board">
      {puzzlePieces.map((piece, index) => (
        <div
          key={index}
          className="puzzle-piece"
          style={{
            backgroundImage: `url(${piece.image})`,
            backgroundPosition: `${piece.x}px ${piece.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default PuzzleBoard;
