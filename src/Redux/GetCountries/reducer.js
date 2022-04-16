import { GET_COUNTRIES_LIST_LOADING, GET_COUNTRIES_LIST_SUCCESS, GET_COUNTRIES_LIST_FAILURE } from "./action";

const initState = {
    loading : false,
    error : false,
    countries : []
}

export const getCountriesListReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case GET_COUNTRIES_LIST_LOADING:
            return {
                ...state,
                loading : true,
                error : false
            }
        case GET_COUNTRIES_LIST_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false,
                countries : [...payload]
            }
        case GET_COUNTRIES_LIST_FAILURE:
            return{
                ...state,
                loading : false,
                error : false
            }
        default:
            return state
    }
} 