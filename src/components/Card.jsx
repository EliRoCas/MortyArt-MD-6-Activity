import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ character, price }) => {
  return (
    <div className="card">
      <img src={character.img} alt={character.name} />
      <h3>{character.name}</h3>
      <p>$ {price} Cop</p>
      <button>
        <Link className="link" to={`/product/${character.id}?price=${price}`}>Ver más</Link>
      </button>
    </div>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  price: PropTypes.number.isRequired,
};

export default Card;
