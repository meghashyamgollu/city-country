import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditCityData, FetchCityData, UpdateCity, UpdateCountry, UpdatePopulation } from "../../Redux/EditCity/action";
import { getCountryOptions } from "../../Redux/GetCountries/action";

export const CityEdit = () => {
//   const [city, setCity] = useState("");
//   const [population, setPopulation] = useState(0);
//   const [country, setCountry] = useState("");
  const { countries } = useSelector((state) => state.getCountriesList);
  const dispatch = useDispatch();
  const { id } = useParams();
  const cityDetail  = useSelector((state) => state.editCity);
  
  
  
  useEffect(() => {
      dispatch(FetchCityData(id));
      console.log(cityDetail);
    }, []);
    
  useEffect(() => {
    dispatch(getCountryOptions());
  }, []);

  const handleSubmit = () => {
    dispatch(EditCityData(cityDetail));
  };

  const { city, country, population } = cityDetail;
  return (
    <div>
      CityEdit
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => {
          dispatch(UpdateCity(e.target.value))
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Population"
        value={population}
        onChange={(e) => {
          dispatch(UpdatePopulation(e.target.value))
        }}
      />
      <br />
      <label>
        Select
        <select
        value={country}
          onChange={(e) => {
            dispatch(UpdateCountry(e.target.value))
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
      <button onClick={handleSubmit}>Update City</button>
    </div>
  );
};
