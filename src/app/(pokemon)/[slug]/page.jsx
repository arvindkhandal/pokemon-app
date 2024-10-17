import { getPokeData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default async function PokeData({ params }) {
  const { slug } = params;
  const pokemon = await getPokeData(`/pokemon/${slug}`);
  return (
    <div className="p-5 bg-slate-200 w-[100vw] h-[100vh] overflow-x-hidden">
      <nav className="mb-4 flex items-center text-lg">
        <Link href="/" className="text-blue-500  hover:underline">
          Home
        </Link>
        <span className="mx-2">{">>"}</span>
        <span className="text-gray-700 text-2xl capitalize">{slug}</span>
      </nav>
      <div className="container mx-auto p-4 flex justify-center">
        <div className="w-full max-w-xl">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mx-auto mb-4 h-full">
              <Image
                width={600}
                height={520}
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-full h-60  bg-teal-300 rounded-lg object-contain"
              />
            </div>
            <div className="bg-orange-200 p-4 rounded-lg">
              <h1 className="text-xs font-bold mb-2">Name: {pokemon.name}</h1>
              <p className="text-xs mb-2">
                Type: {pokemon.types.map((type) => type.type.name).join(", ")}
              </p>
              <div className="mb-2">
                <h2 className="text-sm font-semibold">Stats:</h2>
                <ul>
                  {pokemon.stats.map((stat) => (
                    <li className="text-xs" key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <h2 className="text-sm font-semibold">Abilities:</h2>
                <ul>
                  {pokemon.abilities.map((ability) => (
                    <li className="text-xs" key={ability.ability.name}>
                      {ability.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <h2 className="text-sm font-semibold">Some Moves:</h2>
                <ul>
                  {pokemon.moves.slice(0, 10).map((move) => (
                    <li className="text-xs" key={move.move.name}>
                      {move.move.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
