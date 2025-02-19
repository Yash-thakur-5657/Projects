import { useState } from "react"
import CountriesList from "./CountriesList";
import SelectMenu from "./SelectMenu";
import SearchBar from "./SearchBar";
import "../App.css";
import { useOutletContext } from "react-router-dom";

export default function Home() {
    const [value,setValue] = useState('');
    const [isDark] = useOutletContext();
    return (
    <main className={`${isDark? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setValue={setValue} />
        <SelectMenu />
      </div>
      <CountriesList value={value} />
    </main>
  );
}
