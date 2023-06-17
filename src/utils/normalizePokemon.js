const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export const normalizePokemon = ({ pokemon, species, evolution }) => {
  const data = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${IMG_URL + pokemon.id}.png`,
    types: pokemon.types,
    flavorText: species.flavor_text_entries.find(
      (l) => l.language.name === "en"
    )?.flavor_text,
    species: species.genera.find((l) => l.language.name === "en")?.genus,
    habitat: species.habitat?.name,
    height: pokemon.height,
    weight: pokemon.weight,
    catchRate: ((species?.capture_rate / 255) * 100).toFixed(1) + "%",
    evolution: evolution,
  };

  return data;
};

export const normalizePokemonLite = (pokemon) => {
  const data = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${IMG_URL + pokemon.id}.png`,
    types: pokemon.types,
  };
  return data;
};
