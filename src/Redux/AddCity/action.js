import axios from "axios";

export const ADD_CITY_LOADING = "ADD_CITY_LOADING";
export const ADD_CITY_SUCCESS = "ADD_CITY_SUCCESS";
export const ADD_CITY_FAILURE = "ADD_CITY_FAILURE";

export const AddCityLoading = () => {
  return {
    type: ADD_CITY_LOADING,
  };
};

export const AddCitySuccess = () => {
  return {
    type: ADD_CITY_SUCCESS,
  };
};

export const AddCityFailure = () => {
  return {
    type: ADD_CITY_FAILURE,
  };
};

export const AddCityData = (CityDetails) => (dispatch) => {
  dispatch(AddCityLoading());
  axios
    .post(`http://localhost:8080/cities`, {
      ...CityDetails,
    }).then((res)=> {console.log(res.status)})
    .then(dispatch(AddCitySuccess()))
    .catch((error) => {
      console.log(error);
    });
};
