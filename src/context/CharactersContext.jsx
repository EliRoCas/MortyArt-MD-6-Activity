import { createContext, useState, useEffect } from "react";

import PropTypes from "prop-types";

import { getCharacters } from "../services/apiService";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      setCharacters(await getCharacters());
    })();
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

CharactersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
