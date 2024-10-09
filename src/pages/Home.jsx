import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <section className="banner">
          <div className="banner-content">
            <h1>Tienda de Dibujos de Rick and Morty</h1>
            <p>Compra los mejores dibujos de tus personajes favoritos</p>
            <Link to="/products">
              <button className="shop-now">Compra Ahora</button>
            </Link>
          </div>
        </section>
        <section className="promotions">
          <h2>Promociones y Eventos</h2>
          <div className="promotions-cards">
            <div className="card">
              <h3>Evento de Firma</h3>
              <p>
                Conoce al creador y consigue tu dibujo autografiado. Evento
                exclusivo este fin de semana.
              </p>
            </div>
            <div className="card">
              <h3>Descuento del 50%</h3>
              <p>
                Aprovecha nuestro descuento del 50% en todos los productos
                durante este mes.
              </p>
            </div>
            <div className="card">
              <h3>Nuevo Lanzamiento</h3>
              <p>
                Presentamos nuestra nueva colección de dibujos inéditos de Rick
                y Morty. ¡No te lo pierdas!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
