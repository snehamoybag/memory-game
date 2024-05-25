import "../styles/card.css";

const Card = ({ name, id }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const imgAlt = `Photo of ${name}, a Pokemon`;

  return (
    <button type="button" className="card">
      <img src={imgUrl} alt={imgAlt} className="card__img" />
      <h2 className="card__name">{name}</h2>
    </button>
  );
};

export default Card;
