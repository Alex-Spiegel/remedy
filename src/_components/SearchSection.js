"use client";

import { useState } from "react";
import SearchButton from "./SearchButton";

function SearchSection() {
  const [activeSearch, setActiveSearch] = useState("search1");

  return (
    <div className="w h-20 mx-auto flex justify-center">
      <SearchButton
        id="complaint-tab"
        label="Nach Beschwerden suchen"
        isActive={activeSearch === "search1"}
        onClick={() => setActiveSearch("search1")}
      />
      <SearchButton
        id="drug-tab"
        label="Nach Heilpflanzen suchen"
        isActive={activeSearch === "search2"}
        onClick={() => setActiveSearch("search2")}
      />
      <SearchButton
        id="product-tab"
        label="Nach Produkten suchen"
        isActive={activeSearch === "search3"}
        onClick={() => setActiveSearch("search3")}
      />
    </div>
  );
}

export default SearchSection;
