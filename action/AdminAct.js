  import axios from 'axios'
  import {
    LoginAdminSucces
  } from "../constants/productConstants";
  
  export const LoginAdmin = (data) => async (dispatch) => {
    try {
      const response = await axios.post("/adminsignin", data);
  
      const { token, user } = response.data;
  
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
  
      dispatch({
        type: LoginAdminSucces,
        payload: user,
      });
      
      // Set token in request headers for future requests
      
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
     
    } catch (error) {
      console.log(error);
    }
  };