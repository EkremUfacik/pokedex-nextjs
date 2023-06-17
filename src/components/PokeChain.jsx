import { capitalize } from "@/utils/capitalize";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PokeChain = ({ pokemon }) => {
  const IMG_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  const getId = (url) => {
    return url.split("/").at(-2);
  };

  const chain1 = pokemon.evolution.chain.species;
  const chain2 = pokemon.evolution.chain.evolves_to[0]?.species;
  const chain3 = pokemon.evolution.chain.evolves_to[0]?.evolves_to[0]?.species;

  return (
    <div className="flex justify-center gap-4 mt-4">
      <div className="flex gap-4">
        <Link
          className="hover:-translate-y-1 transition-all duration-500 text-center"
          href={`/pokemon/${chain1.name}`}
        >
          <Image
            className="mx-auto"
            src={IMG_URL + getId(chain1.url) + ".png"}
            width={70}
            height={70}
          />
          <p className="text-sm font-semibold">{capitalize(chain1.name)}</p>
        </Link>
        {chain2 && <ChevronRightIcon className="w-5" />}
      </div>
      {chain2 && (
        <div className="flex gap-4">
          <Link
            className="hover:-translate-y-1 transition-all duration-500 text-center"
            href={`/pokemon/${chain2.name}`}
          >
            <Image
              className="mx-auto"
              src={IMG_URL + getId(chain2.url) + ".png"}
              width={70}
              height={70}
            />

            <p className="text-sm font-semibold">{capitalize(chain2.name)}</p>
          </Link>
          {chain3 && <ChevronRightIcon className="w-5" />}
        </div>
      )}

      {chain3 && (
        <Link
          className="hover:-translate-y-1 transition-all duration-500 text-center"
          href={`/pokemon/${chain3.name}`}
        >
          <Image
            className="mx-auto"
            src={IMG_URL + getId(chain3.url) + ".png"}
            width={70}
            height={70}
          />
          <p className="text-sm font-semibold">{capitalize(chain3.name)}</p>
        </Link>
      )}
    </div>
  );
};

export default PokeChain;
