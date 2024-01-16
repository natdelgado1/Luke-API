'use client'
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PokemonDetailPage = () => {
  const { pokename } = useParams();
  const [pokemon, setPokemon]= useState({});
  const getPokemonDetails = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`);;
    const result = await response.data;
    console.log(result);
    setPokemon(result);
  }

  useEffect(()=>{
    getPokemonDetails();
  }, [])
  return (
    <main>
        <Link href={"/"}>Home</Link>
      <h1>{pokename.toUpperCase()} </h1>
      <ul>
                <li><h2>Experiencia: {pokemon.base_experience}</h2></li>
                <li><h2>Altura: {pokemon.height} cm</h2></li>
                <li><h2>Peso: {pokemon.weight} lb</h2></li>
                <li><h2>Habilidades:</h2>
                    <ul>
                        {
                            pokemon.abilities?.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <h3>{item.ability.name}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li><h2>Tipo:</h2>
                    <ul>
                        {
                            pokemon.types?.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <h3>{item.type.name}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
    </main>
  );
};

export default PokemonDetailPage;