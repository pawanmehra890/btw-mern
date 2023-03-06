//authentication action.js/////
import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,




  UpdateRoleReq,
  UpdateRoleSuccess,
  UpdateRoleFail
} from "../constants/productConstants";

export const AuthactionSignup = (user) => (dispatch) => {
  console.log(user);
  dispatch({
    type: SIGNUP_REQUEST,
  });
  axios
    .post("/signup", user)
    .then((res) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    })

    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
    });
};

// signin authentication>>>>>>>>>>>
export const signinRequest = (user) => (dispatch) => {
  dispatch({
    type: SIGNIN_REQUEST,
  });
  axios
    .post("/signin", user)
    

    .then((res) => {

      if (res.status === 200) {
     dispatch({
          type: SIGNIN_SUCCESS,
          payload: res.data.user,
          userId:res.data.user._id,
          token: res.data.token,
        });
      } else if (res.status === 400) {
        throw new Error("Incorrect email or password");
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SIGNIN_FAIL,
        payload: error,
      });
    });
};



// export const UpdateRole = (role) => (dispatch) => {
//   try {
//     dispatch({
//       type: UpdateRoleReq,
//     });
//     const user = JSON.parse(localStorage.getItem("user"));
//     axios
//       .put("/updateRole", { role, userId: user._id })
//       .then((res) => {
//         dispatch({
//           type: UpdateRoleSuccess,
//           payload: res.data,
//         });
//       });
//   } catch (error) {
//     dispatch({
//       type: UpdateRoleFail,
//       payload: error,
//     });
//   }
// };

export const UpdateRole = (role) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.put(
      "/updateRole",
      { userId: user._id, role: role },
      {headers:{Authorization:`Bearer ${token}`}}
     );


    const {user:updatedUser, token: newToken } = response.data;
    localStorage.setItem("newtoken", newToken);
    localStorage.setItem("updateUser", JSON.stringify(updatedUser));
    dispatch({
      type: UpdateRoleSuccess,
      payload: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};


