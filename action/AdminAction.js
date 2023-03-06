import axios from "axios";
import {
  FETCH_SELLER_DETAILS_FAILURE,
  FETCH_SELLER_DETAILS_SUCCESS,
  GET_SELLER_BYID_SUCCESS,
  GET_SELLER_UPDATE_SUCCESS,
  DeleteContactProfile,
} from "../constants/productConstants";

export const fetchSellerDetails = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/GetContactProfile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      dispatch({
        type: FETCH_SELLER_DETAILS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SELLER_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Admin get data by id

export function getContactProfileById(id) {
  return (dispatch) => {
    axios.get(`/GetContactProfilebyId/${id}`).then(function (res) {
      console.log(res);
      dispatch({
        type: GET_SELLER_BYID_SUCCESS,
        payload: res.data,
      });
    });
  };
}

// Admin update data
// export const updateContactProfile = (data,id) => (dispatch) => {
//   try{
//     axios.put(`/UpdateContactProfile/${id}`, data).then(function (res) {
//       dispatch({
//         type: GET_SELLER_UPDATE_SUCCESS,
//         payload: res.data,
//       });
//     });
//   }
//   catch (error){
// console.log(error)
//   }
// };

export const updateContactProfile = (data, id) => (dispatch) => {
  console.log(data)
  axios
    .put(`/UpdateContactProfile/${id}`, data)
    .then(function (res) {
      dispatch({
        type: GET_SELLER_UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

//admin delete seller data
// export const DleteDataContact = (id) =>(dispatch)=>{
//  try{
//   axios.delete(`deleteContactProfile/${id}`).then((data)=>{

//       dispatch({
//         type: DeleteContactProfile,
//       });

//   })
//  }catch(error){
//   console.log(error)
//  }
// };

export const deleteContactProfile = (id) => (dispatch) => {
  axios
    .delete(`/deleteContactProfile/${id}`)
    .then(function (res) {
      dispatch({
        type: DeleteContactProfile,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
