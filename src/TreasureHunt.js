import React, { useState } from 'react';
import './style1.css';
import batcaveImage from '../images/batcave.jpg';
import wayneMansionImage from '../images/download.jpg';
import jokerHideoutImage from '../images/67efa8b912206c728f15e9a70781bfd3.jpg';
import gothamCityImage from '../images/1186220.jpg';
import bruceWayneImage from '../images/download (1).jpg';
import superheroImage from '../images/Batman_Infobox.jpg';


function TreasureHunt() {
  /*Define an array of clues with text descriptions and corresponding urls*/
  const clues = [
    {
      text: "The superhero's symbol is a bat. Go to the bat cave and search for the next clue.",
      url: "https://www.google.com/maps?q=bat+cave",
      image: batcaveImage
    },
    {
      text: "The superhero's alter ego is Bruce Wayne. Find his mansion and look for the next clue.",
      url: "https://www.google.com/maps?q=wayne+mansion",
      image: wayneMansionImage
    },
    {
      text: "The superhero's archenemy is the Joker. Check out the Joker's hideout and look for the next clue.",
      url: "https://www.google.com/maps?q=joker+hideout",
      image: jokerHideoutImage
    },
    {
      text: "The superhero's city is Gotham. Visit Gotham City and search for the next clue.",
      url: "https://www.google.com/maps?q=gotham+city",
      image: gothamCityImage
    },
    {
      text: "The superhero's real name is Bruce Wayne. Search for an image of Bruce Wayne to find the superhero.",
      url: "https://www.google.com/search?q=bruce+wayne&tbm=isch",
      image: bruceWayneImage
    }
  ];

  // Define state variables to keep track of the current clue, player input, and whether the game is over
  const [currentClue, setCurrentClue] = useState(0);
  const [playerInput, setPlayerInput] = useState('');
  const [gameOver, setGameOver] = useState(false);

  // Define a function to handle submitting the player's guess
  const handleSubmitGuess = (event) => {
    event.preventDefault();
    if (playerInput.toLowerCase() === 'batman') {
      setGameOver(true);
    } else {
      alert("That's not the correct superhero. Try again!");
    }
  };

  // Define a function to handle advancing to the next clue
  const handleNextClue = () => {
    if (currentClue === clues.length - 1) {
      // If this is the last clue, set the game over flag
      setGameOver(true);
    } else {
      // Otherwise, increment the current clue index and reset the player input
      setCurrentClue(currentClue + 1);
      setPlayerInput('');
    }
  };

  return (
    <div className="treasure-hunt-container">
      {!gameOver ? (
        <div className="clue-container">
          <h1>Superhero Treasure Hunt</h1>
          <img src={clues[currentClue].image} alt="" className="clue-image" />
          <p>{clues[currentClue].text}</p>
          <form onSubmit={handleSubmitGuess}>
            <label htmlFor="guess-input">Who is the superhero?</label>
            <br />
            <input
              id="guess-input"
              type="text"
              value={playerInput}
              onChange={(event) => setPlayerInput(event.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleNextClue}>Next Clue</button>
        </div>
       ) : 
        <div className="victory-container">
          <h1>You found the superhero!</h1>
          <img src={superheroImage} alt="Superhero" className="superhero-image" />
        </div>
      }
    </div>
  );}
