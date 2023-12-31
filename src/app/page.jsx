"use client";

import PokemonCard from "@/components/PokemonCard";
import useInfiniteQuery from "@/hooks/useInfiniteQuery";
import Image from "next/image";
import loadBall from "@/assets/load_ball.png";
import { useEffect, useRef } from "react";
import BackToTop from "@/components/BackToTop";

const Home = () => {
  const { pokemons, isLoadingMore, setSize } = useInfiniteQuery();

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSize((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, []);

  return (
    <div className="pb-40">
      <div className="grid gap-y-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 max-w-7xl mx-auto">
        {pokemons?.map((data) => (
          <PokemonCard key={data.name} url={data.url} />
        ))}
      </div>
      {isLoadingMore && (
        <div className="my-20">
          <Image
            width={100}
            height={100}
            className="animate-spin mx-auto"
            src={loadBall}
            alt="load"
          />
        </div>
      )}
      <div className="mt-24" ref={observerTarget}></div>
      <BackToTop />
    </div>
  );
};

export default Home;
