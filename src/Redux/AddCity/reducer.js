import { ADD_CITY_FAILURE, ADD_CITY_LOADING, ADD_CITY_SUCCESS } from "./action";

const initState = {
    loading : false,
    error : false
}

export const AddCityReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ADD_CITY_LOADING:
            return{
                ...state,
                loading : true,
                error : false
            }
        case ADD_CITY_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false
            }
        case ADD_CITY_FAILURE:
            return{
                ...state,
                loading : false,
                error : true
            }
        default:
            return state;
    }
}