import axios from "axios";

export const GET_COUNTRIES_LIST_LOADING = "GET_COUNTRIES_LIST_LOADING";
export const GET_COUNTRIES_LIST_SUCCESS = "GET_COUNTRIES_LIST_SUCCESS";
export const GET_COUNTRIES_LIST_FAILURE = "GET_COUNTRIES_LIST_FAILURE";

export const GetCountriesListLoading = () => ({
    type : GET_COUNTRIES_LIST_LOADING
})

export const GetCountriesListSuccess = (payload) => ({
    type : GET_COUNTRIES_LIST_SUCCESS,
    payload
})

export const GetCountriesListFailure = () => ({
    type : GET_COUNTRIES_LIST_FAILURE
})


export const getCountryOptions = () => (dispatch) => {
    dispatch(GetCountriesListLoading)
    axios
      .get(`http://localhost:8080/countries`)
      .then((res) => {dispatch(GetCountriesListSuccess(res.data))})
      .catch((error) => {
        console.log(error);
        dispatch(GetCountriesListFailure)
      });
};