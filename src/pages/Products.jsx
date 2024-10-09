import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Card from "../components/Card";
import "./products.scss";

const Products = () => {
  const { characters } = useContext(CharactersContext);

  const getRandomPrice = () => {
    return Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
  };

  return (
    <>
      <h2>Dibujos de Rick & Morty</h2>
      <section className="cardList">
        {characters.map((character) => {
          const randomPrice = getRandomPrice();
          return (
            <Card
              key={character.id}
              character={character}
              price={randomPrice}
            />
          );
        })}
      </section>
    </>
  );
};

export default Products;

// Without using context
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { getCharacters } from "../services/apiService";

// import "./products.scss";

// const Products = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     (async () => {
//       setCharacters(await getCharacters());
//     })();
//   }, []);

//   const getRandomPrice = () => {
//     return Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
//   };

//   return (
//     <>
//       <h2>Dibujos de Rick & Morty</h2>
//       <section className="cardList">
//         <ul className="productList">
//           {characters.map((character) => {
//             const randomPrice = getRandomPrice();
//             return (
//               <li key={character.id}>
//                 <img src={character.img} alt={character.name} />
//                 <h3>{character.name}</h3>
//                 <p>{randomPrice} Cop</p>
//                 <button>
//                   <Link to={`/product/${character.id}?price=${randomPrice}`}>
//                     Ver más
//                   </Link>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </>
//   );
// };

// export default Products;
