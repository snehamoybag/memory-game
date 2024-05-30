import { useEffect, useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";
import dummyData from "./data/dummyData.json";
import getShuffledArray from "./scripts/getShuffledArray";
import "./App.css";

function App() {
  const defaultCardsData = getShuffledArray(
    JSON.parse(JSON.stringify(dummyData)).results,
  );

  const [cardsData, setCardsData] = useState(
    Array.isArray(defaultCardsData) ? defaultCardsData : [],
  );

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

  return (
    <>
      <Header />
      <main>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        <Board cardsData={cardsData} handleCardClick={handleCardClick} />
      </main>
      <Footer />
    </>
  );
}

export default App;
