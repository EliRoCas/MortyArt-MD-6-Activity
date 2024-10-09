import { Link } from "react-router-dom";

import notFound from "../assets/notFound.webp";

import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>404</h2>
      <p>¡Upss! Página no encontrada</p>
      <button>
        <Link className="nfLink" to="/">
          Volver al inicio
        </Link>
      </button>
      <img src={notFound} alt="Not Found" className="nfImg" />
    </div>
  );
};

export default NotFound;
