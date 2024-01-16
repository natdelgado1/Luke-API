"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from './page.module.css';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemonData = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const result = await response.data;
    console.log(result.results);
    setPokemon(result.results);
  };
  return (
    <main className={styles.main}>
      <button className={styles.pokebtn} onClick={getPokemonData}> Fetch Pokemon</button>
      <ul>
        {
          pokemon.map((item, index) => {

            return (
              <li key={index}>
                <h3 style={{ margin: 0 }}>
                  <Link href={`/pokemon/${item.name}`}>
                    {item.name}
                  </Link>
                </h3>
              </li>


              
            )
          })
        }
      </ul>
    </main>
  );
};
export default Home;
