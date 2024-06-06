import { useEffect, useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import GameOverModal from "./components/GameOverModal";
import Footer from "./components/Footer";
import getPokiApiUrl from "./scripts/getPokiApiUrl";
import getShuffledArray from "./scripts/getShuffledArray";
import "./App.css";

function App() {
  const [apiOffset, setApiOffset] = useState(0);
  const pokemonLimit = 30;
  const url = getPokiApiUrl(pokemonLimit, apiOffset);

  const [cardsData, setCardsData] = useState([]);

  // fetch data from api
  useEffect(() => {
    const apiData = async () => {
      const response = await fetch(url);
      const data = await response.json(); // .json() is asynchronous
      const results = data.results;

      setCardsData(results);
    };

    apiData(); // calling the function
  }, [url]);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const bestScoreStorageKey = "best_score";

  // sync best score with local storage
  useEffect(() => {
    if (currentScore > bestScore) {
      localStorage.setItem(bestScoreStorageKey, String(currentScore));
    }

    const savedBestScore = Number(localStorage.getItem(bestScoreStorageKey));
    setBestScore(savedBestScore || 0);
  }, [currentScore, bestScore]);

  const [isGameOver, setIsGameOver] = useState(false);
  const [foundCards, setFoundCards] = useState(new Set());

  const addToFoundCards = (cardName) => {
    setFoundCards((prevFoundCards) => new Set([...prevFoundCards, cardName]));
  };

  const handleCardClick = (cardName) => {
    if (isGameOver) return;

    if (foundCards.has(cardName)) {
      setIsGameOver(true);
      return;
    }

    addToFoundCards(cardName);
    setCurrentScore((prevScore) => prevScore + 1);
    setCardsData((prevCardsData) => getShuffledArray(prevCardsData));
  };

  const handlePlayAgain = () => {
    setCurrentScore(0);
    setIsGameOver(false);
    setApiOffset((prevOffset) => prevOffset + pokemonLimit);
  };

  return (
    <>
      <Header />
      <main>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        <Board cardsData={cardsData} handleCardClick={handleCardClick} />
        <GameOverModal
          isOpen={isGameOver}
          currentScore={currentScore}
          bestScore={bestScore}
          handlePlayAgain={handlePlayAgain}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
