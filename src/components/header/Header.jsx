import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="headerContainer">
      <h1>MortyArte</h1>
      <nav className="navbar">
        <div className="toggleButton" onClick={toggleMenu}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link className="link" to="/" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/products"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
