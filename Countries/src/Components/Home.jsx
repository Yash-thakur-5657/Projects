import { useState } from "react"
import CountriesList from "./CountriesList";
import SelectMenu from "./SelectMenu";
import SearchBar from "./SearchBar";
import "../App.css";

export default function Home() {
    const [value,setValue] = useState('');
    return (
    <main>
      <div className="search-filter-container">
        <SearchBar setValue={setValue} />
        <SelectMenu />
      </div>
      <CountriesList value={value} />
    </main>
  );
}
