import { useState } from "react";
import "../styles/card.css";

const Card = ({ name, id, handleClick }) => {
  const [isPlaceholderActive, setIsPlaceholderActive] = useState(true);

  const handleImgLoad = () => setIsPlaceholderActive(false);

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const imgAlt = `Photo of ${name}, a Pokemon`;

  return (
    <button type="button" className="card" onClick={handleClick}>
      {isPlaceholderActive && (
        <p className="card__placeholder">
          Image is loading, please wait a sec..
        </p>
      )}

      {/**/}
      <img
        src={imgUrl}
        alt={imgAlt}
        className="card__img"
        onLoad={handleImgLoad}
      />
      <h2 className="card__name">{isPlaceholderActive ? "Loading.." : name}</h2>
    </button>
  );
};

export default Card;
