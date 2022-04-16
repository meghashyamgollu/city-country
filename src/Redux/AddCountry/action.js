import axios from "axios";

export const ADD_COUNTRY_LOADING = "ADD_COUNTRY_LOADING";
export const ADD_COUNTRY_SUCCESS = "ADD_COUNTRY_SUCCESS";
export const ADD_COUNTRY_FAILURE = "ADD_COUNTRY_FAILURE";
export const GET_COUNTRIES_LIST = "GET_COUNTRIES_LIST";

export const AddCountryLoading = () => {
  return {
    type: ADD_COUNTRY_LOADING,
  };
};

export const AddCountrySuccess = () => {
  return {
    type: ADD_COUNTRY_SUCCESS,
  };
};

export const AddCountryFailure = () => {
  return {
    type: ADD_COUNTRY_FAILURE,
  };
};



export const AddCountryData = (country) => (dispatch) => {
  dispatch(AddCountryLoading());
  axios
    .post(`http://localhost:8080/countries`, {
      ...country,
    })
    .then((res) => {
      console.log(res.status);
    })
    .then(dispatch(AddCountrySuccess()))
    .catch((error) => {
      console.log(error);
    });
};


