import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCityData } from "../../Redux/AddCity/action";
import { getCountryOptions } from "../../Redux/GetCountries/action";


export const AddCity = () => {
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState(0);
  const [country, setCountry] = useState("");
  const { countries } = useSelector((state) => state.getCountriesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryOptions());
    console.log(countries);
  }, []);

  const handleSubmit = () => {
    const cityDetails = {
      city,
      population,
      country,
    };
    dispatch(AddCityData(cityDetails));
  };

  return (
    <div>
      <h3>AddCity</h3>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Population"
        value={population}
        onChange={(e) => {
          setPopulation(e.target.value);
        }}
      />
      <br />
      <label>
        Select
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          {countries.map((el) => {
            return (
              <option key={el.id} value={el.country}>
                {el.country}
              </option>
            );
          })}
        </select>
      </label>
      <button onClick={handleSubmit}>Add City</button>
    </div>
  );
};
