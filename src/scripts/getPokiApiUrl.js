const getPokiApiUrl = (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return url;
};

export default getPokiApiUrl;
