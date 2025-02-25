import { useContext, useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import SelectMenu from "./SelectMenu";
import SearchBar from "./SearchBar";
import "../App.css";
import { useTheme } from "../../hooks/useTheme";
// import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [value, setValue] = useState("");
  const [isDark] = useTheme();
  // const windowSize = useWindowSize();
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setValue={setValue} />
        <SelectMenu setValue={setValue}/>
      </div>
      {/* <div style={{ textAlign: "center" }}>{windowSize.height} X {windowSize.width}</div> */}
      <CountriesList value={value} />
    </main>
  );
}
