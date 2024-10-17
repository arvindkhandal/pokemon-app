"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) {
      params.set("search", search);
    }
    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    const params = new URLSearchParams(window.location.search);
    if (search) {
      params.delete("search");
      setSearch("");
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div className="mb-4 flex justify-center">
      <input
        className="border p-2 w-1/2"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search !== "" && (
        <button onClick={handleClear} className="bg-red-300 -ml-5">
          clear
        </button>
      )}
      <button className=" bg-gray-500 text-white p-2" onClick={handleSearch}>
        search
      </button>
    </div>
  );
}

export default Search;
