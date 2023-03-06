import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
  // add product
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  Getallproducts,
  getproductsReq,
  Addproducts,
  contactprofile,
  Contactaddreq,
  GET_USER_BYID_REQUEST,
  GET_USER_BYID_SUCCESS,
  GET_USER_BYID_FAILURE,
  GET_USER_upade_REQUEST,
  GET_USER_update_SUCCESS,
  GET_USER_update_FAILURE,
  Deleteproducts,
  GetcontactprfilebyUserLogin_req,
  GetcontactprfilebyUserLogin_success,
  GetcontactprfilebyUserLogin_fail,
  FailContactProfile,
  AddContactProfile,
  FormReq,
  FormSuccess,
  FormReFail,
  GetFormReq,
  GetFormSuccess,
  GetFormReFail,

//create categories
 CreateCategory_Req,
 CreateCategory_Succes,
CreateCategory_Fails




} from "../constants/productConstants";

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const { data } = await axios.get("/getcategory");

    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

// add product
export const AddProductactions = (product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_REQUEST,
  });
  axios
    .post("/createsingleproducts", product)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//get products by eller

export const Contatctprofilex = (product) => (dispatch) => {
  dispatch({
    type: AddContactProfile,
  });

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .post("/Contatctprofile", product, config)
    .then((res) => {
      dispatch({
        type: contactprofile,
        payload: res.data, // Dispatch only the updated contact profile data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FailContactProfile,
        payload: "error",
      });
    });
};

export const GetContactprofileBylogin = () => (dispatch) => {
  dispatch({
    type: GetcontactprfilebyUserLogin_req,
  });
  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get("/GetUserbyLogin", config).then((res) => {
      dispatch({
        type: GetcontactprfilebyUserLogin_success,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: GetcontactprfilebyUserLogin_fail,
      payload: error,
    });
  }
};

// constact profile

// business profile

//get selller products

export const getAllproductsAction = () => async (dispatch) => {
  dispatch({
    type: ALL_PRODUCT_REQUEST,
  });
  try {
    axios.get("/getallproducts").then(function (res) {
      console.log(res.data);
      dispatch({
        type: Getallproducts,
        payload: res.data,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error,
    });
  }
};

//getuser  by id
// export function getuserid(id) {
//   return (dispatch) => {
//     dispatch({ type: GET_USER_BYID_REQUEST });
//     axios
//       .get(`readUserById/${id}`)
//       .then(function (res) {
//         console.log("res =>", res.data);
//         dispatch({
//           type: GET_USER_BYID_SUCCESS,
//           payload: res.data,
//         });
//       })
//       .catch(function (error) {
//         const { response } = error;
//         console.log("err", response);
//         if (response !== undefined) {
//           dispatch({
//             type: GET_USER_BYID_FAILURE,
//             payload: response.data,
//           });
//         }
//       });
//   };
// }

export function getuserid(id) {
  return (dispatch) => {
    axios.get(`/readUserById/${id}`).then(function (res) {
      dispatch({
        type: GET_USER_BYID_SUCCESS,
        payload: res.data,
      });
    });
  };
}

export function updateUserById(data, id) {
  console.log(data);
  console.log("====================================00099999");
  console.log(data, "");
  console.log("====================================");
  return (dispatch) => {
    dispatch({ type: GET_USER_upade_REQUEST });
    axios
      .put(`/updateUser/${id}`, data)

      .then(function (res) {
        console.log("res =>", res.data);
        dispatch({
          type: GET_USER_update_SUCCESS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: GET_USER_update_FAILURE,
            payload: error,
          });
        }
      });
  };
}

// export const updateUserById = (data, id) => (dispatch) => {
//   console.log(data)
//   try {
//     axios.put(`/updateUser/${id}`,data).then(function (res) {
//       console.log(res.data)
//       dispatch({
//         type: GET_USER_update_SUCCESS,
//         payload: res.data,
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const deleteproducts = (id) => {
  try {
    axios.delete(`/deleteuser/${id}`).then(function (res) {
      console.log(res.data);

      if (res.data.status === 201) {
        console.log("deleted");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//action for form middleware which is for seller ??????????

export const FormMiddleWare = (data) => (dispatch) => {
  dispatch({
    type: FormReq,
  });
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios.post("/SubmitForm", data, config).then((res) => {
    dispatch({
      type: FormSuccess,
      payload: res.data,
    });
  });
  dispatch({
    type: FormReFail,
    payload: "error",
  });
};

export const GetFormMiddleWare = () => async (dispatch) => {
  dispatch({
    type: GetFormReq,
  });
  try {
    const token = localStorage.getItem("token");
    const config ={
      headers:{
        Authorization:`Bearer ${token}`
      }
    }

    axios.get("/GetuserFormDetail", config).then(function (res) {
      dispatch({
        type: GetFormSuccess,
        payload: res.data,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GetFormReFail,
      payload: error,
    });
  }
};




export const CreateCategories = (data) => (dispatch) => {
  console.log(data)
  dispatch({
    type: CreateCategory_Req,
  });
  axios.post("/createcategory", data).then((res) => {
    dispatch({
      type: CreateCategory_Succes,
      payload: res.data,
    });
  });
  dispatch({
    type: CreateCategory_Succes,
    payload: "error",
  });
};

//create categories




