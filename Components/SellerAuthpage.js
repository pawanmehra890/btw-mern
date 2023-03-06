import React,{useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {FormMiddleWare,GetFormMiddleWare} from '../action/productAction'
import { useDispatch ,useSelector} from "react-redux";
function SellerAuthpage() {
 const MYform=useSelector((state)=>state.products.products)
 console.log(MYform)
 const Mydata =MYform?.data
   const userId =MYform?.data.userId
const navigate=useNavigate()

  const dispatch=useDispatch()


  const [data, setData] = useState({
    email:"",
    number:"",
    name:""
  });
  useEffect(()=>{
    if(userId){
      navigate('/sellerhome')
    } 
    else{
     console.log('data')
    }

 },[userId])

 useEffect(()=>{
  setData({
    email:Mydata?Mydata.email : "",
    number:Mydata?Mydata.number : "",
    name:Mydata?Mydata.name : "",

  })

 },[Mydata])


  const handleChnage = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
const Submitdata=(e)=>{
  e.preventDefault()
  dispatch(FormMiddleWare(data))
}


useEffect(()=>{
  dispatch(GetFormMiddleWare())
 
  },[dispatch])
 

  return (
    <>
      <form>
        <h1>Email</h1>
        <input type="text" value={data.email} name="email" onChange={handleChnage} placeholder="email" />
        <h1>number</h1>
        <input type="text" value={data.number} name="number" onChange={handleChnage} placeholder="number" />
        <h1>name</h1>
        <input type="text"  value={data.name} name="name" onChange={handleChnage} placeholder="name" />

      {/* <Button type="submit" onClick={Submitdata}>Submit</Button> */}
      </form>
    </>
  );
}

export default SellerAuthpage;
