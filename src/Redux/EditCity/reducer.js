import { UPDATE_CITY, UPDATE_COUNTRY, UPDATE_POPULATION, EDIT_CITY_FETCH } from "./action";

const initState = {
    city : "",
    country : "",
    population : 0
}

export const EditCityReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case EDIT_CITY_FETCH : 
            return {
                ...state,
                ...payload
            }
        case UPDATE_CITY:
            return{
                ...state,
                city : payload
            }
        case UPDATE_COUNTRY:
            return {
                ...state,
                country : payload
            }
        case UPDATE_POPULATION:
            return{
                ...state,
                population : payload
            }
        default:
            return state;
    }
}