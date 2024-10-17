import Search from "./ui/Search";
import Select from "./ui/Select";
import { getPokeData, getAllPokemonData } from "./lib/data";
import { PokemonCard } from "./ui/Card";
import { Suspense } from "react";
import Header from "./ui/Header";

export default async function Home({ searchParams }) {
  const type = await getPokeData("type");
  const allPokemonData = await getAllPokemonData();

  const data =
    searchParams.filter === undefined && searchParams.search === undefined
      ? allPokemonData
      : allPokemonData.filter((item) => {
          if (searchParams.filter) {
            return item.types[0] == searchParams.filter;
          } else {
            return item.name == searchParams.search;
          }
        });
  return (
    <div className="flex-col gap-5 bg-slate-200">
      <div className="pt-10">
        <Header />
      </div>
      <div className="container mx-auto p-4">
        {/* Select Dropdown */}
        <Select options={type.results} />
        {/* Search Input and Button */}
        <Search />

        {/* Pokémon Cards Grid */}
        <Suspense fallback={<div>loading....</div>}>
          {data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  image={pokemon.image}
                />
              ))}
            </div>
          ) : (
            <div>Nothing to show for {searchParams.filter}</div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
