import { useState } from "react";
import Card from "./Card";
import dummyData from "../data/dummyData.json";
import getIdFromPokiUrl from "../scripts/getIdFromPokeUrl";
import getShuffledArray from "../scripts/getShuffledArray";
import "../styles/board.css";

const Board = () => {
  const defaultCardsData = JSON.parse(JSON.stringify(dummyData)).results || [];

  const cardEls = defaultCardsData.map((cardData) => {
    const { name, url } = cardData;

    return <Card key={name} name={name} id={getIdFromPokiUrl(url)} />;
  });

  const shuffledCardEls = getShuffledArray(cardEls);

  return <div className="board">{shuffledCardEls}</div>;
};

export default Board;
