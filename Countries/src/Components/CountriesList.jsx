import { useEffect, useState } from "react";
// import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";
// import { useState } from "react";

export default function CountriesList({ value }) {
  const [CountryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  const filteredCountries = CountryData.filter((country) =>
    country.name.common.toLowerCase().includes(value)
  );
  return (
    <div className="countries-container">
      {filteredCountries.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        );
      })}
    </div>
  );
}
