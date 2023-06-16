import { fetcher } from "@/utils/fetcher";
import useSWRInfinite from "swr/infinite";

const useInfiniteQuery = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.next) return null;

    if (pageIndex === 0)
      return `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`;

    return previousPageData.next;
  };

  const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
  // if (!data) return "loading...";

  const pokemons = data?.reduce((acc, curr) => [...acc, ...curr.results], []);

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  // const pokemons = data ? [].concat(...data.results) : [];

  return { pokemons, isLoadingMore, setSize };
};

export default useInfiniteQuery;
