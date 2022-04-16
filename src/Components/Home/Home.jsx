import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
export const Home = () => {
  const [cities, setCities] = useState([]);
  const [sortby, setSortby] = useState("id");
  const [sortOrder, setSortorder] = useState("asc");
  const [filterby, setFilterby] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cities`, {
        params: {
          [filter]: filterby,
          _sort: sortby,
          _order: sortOrder,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCities(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sortby, sortOrder, filterby, filter]);

  return (
    <div>
      <h3>Home</h3>
      <Button 
        onClick={() => {
          setSortby("population");
          setSortorder("desc");
        }}
      >
        Population high to low
      </Button>
      <Button
        onClick={() => {
          setSortby("population");
          setSortorder("asc");
        }}
      >
        Population low to high
      </Button>
      <Button
        onClick={() => {
          setFilterby("");
          setFilter("");
        }}
      >
        All Countries
      </Button>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => {
            return (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td
                  onClick={() => {
                    setFilterby(city.country);
                    setFilter("country");
                  }}
                >
                  {city.country}
                </td>
                <td>{city.city}</td>
                <td>{city.population}</td>
                <td>
                  <Button
                    onClick={() => {
                      navigate(`city/${city.id}/edit`);
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button onClick={() => {
                    axios.delete(`http://localhost:8080/cities/${city.id}`)
                  }}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
