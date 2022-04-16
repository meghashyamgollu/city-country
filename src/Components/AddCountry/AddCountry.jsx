import { useState } from "react"
import { useDispatch } from "react-redux";
import { AddCountryData } from "../../Redux/AddCountry/action";


export const AddCountry = () => {
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const countryName = {
            country
        }

        dispatch(AddCountryData(countryName));
    }
  return (
    <div>
        <h3>AddCountry</h3>
        <input type="text" value={country} placeholder="Enter Country Name" 
        onChange={(e) => {setCountry(e.target.value)}}/>
        <button onClick={handleSubmit}>Add Country</button>
    </div>
  )
}
