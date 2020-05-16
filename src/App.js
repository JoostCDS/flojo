import React from "react";
import "./App.css";
import Title from "./components/Title";
// src/App.js
// ...
import Pokemon from "./components/Pokemon/Pokemon";

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

// function App() {
//   return (
//     <div className="App">
//       <main>
//         <Title content="Grapje" />
//         <Pokemon {...pokemon} />
//         ))}
//       </main>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <main className="container my-5">
      <Title content="Cool PokieMons" />

      <div className="row">
        {pokemons.map((pokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon {...pokemon} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;

// const res = pokemon.map((pokemon) => {
//   return pokemon.name;
// });
// console.log(res);
