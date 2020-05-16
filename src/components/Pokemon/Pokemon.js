// src/components/Pokemon.js
import React from "react";
import PokemonScss from "./Pokemon.scss";

// export default function Pokemon(props) {
//   return (
//     <div>
//       <h2>Pokemon name: {props.name}</h2>
//       <p>Weight: {props.weight} kg</p>
//       <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
//       <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>

//       <p>Number of abilities: = {props.abilities.length}</p>

//       <ul>
//         {props.abilities.map((ability) => {
//           return <li>{ability}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4">
      <div class="element_container">
        <div class="rotate_me">
          <div class="Pokemon">
            <div class="card-body pb-0">
              <h5 class="card-title">{props.name}</h5>
              <h6 class="card-subtitle mb-3 text-primary">
                {props.awesome ? "An awesome Pokemon" : "Not awesome"}
              </h6>
              <p className="mb-0">
                Weight: {props.weight} kg
                <br />
                Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
                <br />
                {props.abilities.length} abilities
              </p>
            </div>
            <ul className="list-group list-group-flush">
              {props.abilities.map((ability) => {
                return <li className="list-group-item">{ability}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
