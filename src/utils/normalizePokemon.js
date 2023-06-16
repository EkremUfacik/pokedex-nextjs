const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export const normalizePokemonLite = (pokemon) => {
  //   console.log(pokemon);

  const data = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${IMG_URL + pokemon.id}.png`,
    types: pokemon.types,
  };
  return data;
};
