const URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async () => {
  try {
    const data = await (await fetch(URL)).json();
    const characters = data.results.map((character) => ({
      id: character.id,
      name: character.name,
      img: character.image,
    }));
    return characters;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error obteniendo los productos");
  }
};

export const getCharacterById = async (id) => {
  try {
    const data = await (await fetch(`${URL}/${id}`)).json();
    return {
      id: data.id,
      name: data.name,
      img: data.image,
      status: data.status,
      species: data.species,
    };
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error obteniendo los datos del producto");
  }
};
