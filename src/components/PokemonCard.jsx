import { capitalize } from "@/utils/capitalize";
import PokemonTypeColor from "@/utils/colors";
import { fetcher } from "@/utils/fetcher";
import { normalizePokemonLite } from "@/utils/normalizePokemon";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const PokemonCard = ({ url }) => {
  const { data } = useSWR(url, fetcher);

  const pokemon = data && normalizePokemonLite(data);

  if (!pokemon) return null;

  const { id, image, name, types } = pokemon;
  const firstTypeName = pokemon.types[0].type.name;

  return (
    <Link
      href={`/pokemon/${name}`}
      className="flex flex-col items-center justify-center mx-auto w-[20rem] h-[21rem] rounded-xl hover:shadow-gray-300 shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 relative"
      style={{
        background: `linear-gradient(0deg, #fafafa, ${PokemonTypeColor[firstTypeName].light})`,
      }}
    >
      <p
        className="absolute left-4 top-4 text-3xl font-bold tracking-widest"
        style={{ color: PokemonTypeColor[firstTypeName].medium }}
      >
        #{id.toString().padStart(3, 0)}
      </p>
      <div className="w-48 h-48 relative">
        <Image
          className="w-auto relative"
          priority
          src={image}
          fill
          alt={name}
        />
      </div>
      <p className="font-bold text-lg">{capitalize(name)}</p>
      <div className="flex justify-center gap-4 mt-4 ">
        {types.map((t) => {
          const typeName = t.type.name;
          return (
            <p
              className="px-3 py-1 rounded-lg text-white uppercase text-sm"
              style={{
                backgroundColor: PokemonTypeColor[typeName].medium,
              }}
            >
              {t.type.name}
            </p>
          );
        })}
      </div>
    </Link>
  );
};

export default PokemonCard;
