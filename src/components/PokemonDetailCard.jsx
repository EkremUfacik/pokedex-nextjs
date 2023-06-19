"use client";

import { capitalize } from "@/utils/capitalize";
import PokemonTypeColor from "@/utils/colors";
import Image from "next/image";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import InfoTable from "./InfoTable";
import PokeChain from "./PokeChain";
import { useRouter } from "next/navigation";

const PokemonDetailCard = ({ pokemon }) => {
  const { id, image, name, types, flavorText } = pokemon;
  const firstTypeName = pokemon.types[0].type.name;
  const router = useRouter();

  return (
    <div className="flex-col lg:flex-row flex max-w-5xl my-10 w-full sm:w-2/3 lg:w-auto mx-8 sm:min-w-[32rem] gap-8 dark:text-white">
      <div
        className="lg:flex-1 flex flex-col items-center justify-center h-[36rem] rounded-xl relative w-full"
        style={{
          background: `radial-gradient(circle, #fafafa, ${PokemonTypeColor[firstTypeName].medium})`,
        }}
      >
        <p
          className="absolute right-5 top-5 text-4xl font-bold tracking-widest text-white opacity-70"
          // style={{ color: PokemonTypeColor[firstTypeName].light }}
        >
          #{id.toString().padStart(3, 0)}
        </p>
        <p className="font-mono text-6xl my-6 font-bold drop-shadow-2xl text-white opacity-70">
          {capitalize(name)}
        </p>
        <div className="w-80 h-80 relative">
          <Image
            className="relative animate-poke-bounce"
            priority
            src={image}
            fill
            alt={name}
          />
        </div>
        <div className="cursor-pointer" onClick={() => router.back()}>
          <ArrowSmallLeftIcon className="w-8 text-white absolute top-5 left-4 hover:text-slate-600 hover:left-3 transition-all duration-400 " />
        </div>
      </div>

      <div className="lg:flex-1 self-center">
        <div className="flex justify-center gap-4 mt-4 ">
          {types.map((t, index) => {
            const typeName = t.type.name;
            return (
              <p
                key={index}
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
        <p className="font-semibold text-lg my-6">{flavorText}</p>
        <InfoTable pokemon={pokemon} />
        <PokeChain pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonDetailCard;
