const getData = async (url, name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/${url}/${name}`);
  const data = await response.json();
  return data;
};

export default getData;
