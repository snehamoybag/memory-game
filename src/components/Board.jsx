import Card from "./Card";
import getIdFromPokiUrl from "../scripts/getIdFromPokeUrl";
import uppercasedFirstLetter from "../scripts/uppercasedFirstLetter";
import "../styles/board.css";

const Board = ({ cardsData = [], handleCardClick }) => {
  const cardEls = cardsData.map((cardData, index) => {
    const { name, url } = cardData;

    return (
      <Card
        key={index + name} // to make sure we get complete re-render each time cards data gets shuffled randomly
        name={uppercasedFirstLetter(name)}
        id={getIdFromPokiUrl(url)}
        handleClick={() => handleCardClick(name)}
      />
    );
  });

  return <div className="board">{cardEls}</div>;
};

export default Board;
