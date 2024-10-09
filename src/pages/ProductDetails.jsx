import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getCharacterById } from "../services/apiService";

import "./productDetails.scss";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductDetails = () => {
  const { id } = useParams();
  const query = useQuery();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setCharacter(await getCharacterById(id));
    })();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  const price = query.get("price") || "Precio no disponible";

  const handlerButton = () => {
    toast.success("¡Compra realizada con éxito!");
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <section className="productDetails">
      <h2>{character.name}</h2>
      <img src={character.img} alt={character.name} />
      <p>Estatus: {character.status}</p>
      <p>Especie: {character.species}</p>
      <p>Precio: {price} COP </p>
      <div className="pdButtons">
        <button>
          <Link className="link" to="/products">
            Volver
          </Link>
        </button>
        <button onClick={handlerButton}>Comprar</button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ProductDetails;
