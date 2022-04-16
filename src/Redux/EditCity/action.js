import axios from "axios";

export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_COUNTRY = "UPDATE_COUNTRY";
export const UPDATE_POPULATION = "UPDATE_POPULATION";
export const EDIT_CITY_FETCH = "EDIT_CITY_FETCH";

export const UpdateCity = (payload) => {
  return {
    type: UPDATE_CITY,
    payload
  };
};

export const EditCityFetch = (payload) => {
  return {
    type: EDIT_CITY_FETCH,
    payload,
  };
};

export const UpdateCountry = (payload) => {
  return {
    type: UPDATE_COUNTRY,
    payload
  };
};

export const UpdatePopulation = (payload) => {
  return {
    type: UPDATE_POPULATION,
    payload
  };
};

export const FetchCityData = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8080/cities/${id}`)
    .then((res) => {
      console.log(res);
      dispatch(EditCityFetch(res.data));
    })
    .catch((error) => console.log(error));
};

export const EditCityData = (CityDetails) => (dispatch) => {
//   dispatch(EditCityLoading());
  axios
    .put(`http://localhost:8080/cities/${CityDetails.id}`, {
      ...CityDetails,
    })
    .then((res) => {
      console.log(res);
    })
    // .then(dispatch(EditCitySuccess()))
    .catch((error) => {
    //   dispatch(EditCityFailure);
      console.log(error);
    });
};
