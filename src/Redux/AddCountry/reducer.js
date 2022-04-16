import { ADD_COUNTRY_LOADING, ADD_COUNTRY_SUCCESS, ADD_COUNTRY_FAILURE } from "./action";

const initState = {
    loading: false,
    countries: [],
    error : false
}


export const AddCountryReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ADD_COUNTRY_LOADING:
            return{
                ...state,
                loading : true,
                error : false
            }
        case ADD_COUNTRY_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false
            }
        case ADD_COUNTRY_FAILURE:
            return{
                ...state,
                loading : false,
                error : true
            }
        default:
            return state;
    }
}