import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AddCityReducer } from "./AddCity/reducer";
import { AddCountryReducer } from "./AddCountry/reducer";
import { EditCityReducer } from "./EditCity/reducer";
import { getCountriesListReducer } from "./GetCountries/reducer";



export const rootReducer = combineReducers({
    addCountry : AddCountryReducer,
    getCountriesList : getCountriesListReducer,
    addCity : AddCityReducer,
    editCity : EditCityReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));