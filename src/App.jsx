
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { AddCountry } from './Components/AddCountry/AddCountry';
import { AddCity } from './Components/AddCity/AddCity';
import { Home } from './Components/Home/Home';
import { CityEdit } from './Components/CityEdit/CityEdit';
import { Button } from '@mui/material';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className='navBar'>
        <Button className='nav_button' onClick={() => {navigate(`/`)}}>Home</Button>
        <Button className='nav_button' onClick={() => {navigate(`/add-country`)}}>Add Country</Button>
        <Button className='nav_button' onClick={() => {navigate(`/add-city`)}}>Add City</Button>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-country' element={<AddCountry/>}></Route>
        <Route path='/add-city' element={<AddCity/>}></Route>
        <Route path='/city/:id/edit' element={<CityEdit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
