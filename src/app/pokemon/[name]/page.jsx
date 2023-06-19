import PokemonDetailCard from "@/components/PokemonDetailCard";
import { capitalize } from "@/utils/capitalize";
import getData from "@/utils/getPokemon";
import { normalizePokemon } from "@/utils/normalizePokemon";

export async function generateMetadata({ params }) {
  const { name } = params;
  return {
    title: capitalize(name),
    description: `Pokemon - ${name}`,
  };
}

const Pokemon = async ({ params }) => {
  const { name } = params;
  const pokemonData = await getData("pokemon", name);

  const pokemonSpeciesData = await getData("pokemon-species", name);

  const evolution = await fetch(pokemonSpeciesData.evolution_chain.url).then(
    (res) => res.json()
  );

  const pokemon = normalizePokemon({
    pokemon: pokemonData,
    species: pokemonSpeciesData,
    evolution,
  });

  return (
    <div className="flex justify-center items-center ">
      <PokemonDetailCard pokemon={pokemon} />
    </div>
  );
};

export default Pokemon;
