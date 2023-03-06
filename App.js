import React, { useEffect, useState } from "react";
import "./App.css";

import PrivateRoute from "./privateroutes";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// *! *******************HOME PAGE PATHS***************************
import Home from "./Home";

// import Navbar from "./Components/Navbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Section2 from "./Components/Section2";
import "./Cssfiles/Home.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import FloatingAction from "./Components/FloatingAction";

import ProductCategory from "./MainProducts/ProductCategory";
import ProductSubCategory from "./MainProducts/ProductSubCat";
import ProductInnerSubCategory from "./MainProducts/ProductInnerSubCategory";
import ProductList from "./MainProducts/ProductList";
import ProductPage from "./MainProducts/ProductPage";
import AboutUs from "./Components/AboutUs";
import Career from "./Components/Career";
import Privacypolicy from "./Components/Privacypolicy";
import Termcondition from "./Components/Termcondition";
import ContactUs from "./Components/ContactUs";
// *! *******************END OF HOME PAGE PATHS***************************

// *! *******************SELLER PANEL PAGE PATHS***************************
// import Header from './components/header';
import Sidenav from "./sellerdashboard/Sidenav";
import SellerHeader from "./sellerdashboard/Header";
import SellerHome from "./sellerdashboard/Home";
import Service from "./sellerdashboard/servicepackage";
import Leaddesk from "./sellerdashboard/leaddesk";
import ContactProfile from "./sellerdashboard/ContactProfile";
import Productdetails from "./sellerdashboard/productrelevant";
import Catalog from "./sellerdashboard/catalog";
import Notifications from "./sellerdashboard/notificaationsetting";
import Currentlead from "./sellerdashboard/currentleads";
import Shortlist from "./sellerdashboard/shortlisted";
import ManageProduct from "./sellerdashboard/manageproducts";
import Editmanageproducts from "./sellerdashboard/editmanageproducts";
import AddProduct from "./sellerdashboard/AddProduct";
// import Slidpanel from './sellerdashboard/slideshowpanel';
// *! *******************END OF SELLER PANEL PAGE PATHS***************************

// *! *******************ADMIN PANEL PAGE PATHS***************************
// import AdminFooter from "./admincomponents/";
import AdminHeader from "./admincomponents/AdminHeader";
import AdminDashHome from "./admincomponents/AdminHome";
import AdminSidenav from "./admincomponents/AdminSidenav";
import PopupCallInquiries from "./admincomponents/PopupCallInquiries";
import ProductInquiries from "./admincomponents/ProductInquiries";
import BusinessInquiries from "./admincomponents/BusinessInquiries";
import FreightsEnquiries from "./admincomponents/FreightsEnquiries";
import FeedbackInquiries from "./admincomponents/FeedbackInquiries";
import EFilings from "./admincomponents/EFilings";
import LogisticsInquiries from "./admincomponents/LogisticsInquiries";
import ExportInquiries from "./admincomponents/ExportInquiries";
import ServicesProviderEnquiries from "./admincomponents/ServicesProviderEnquiries";
import GeneralSettings from "./admincomponents/GeneralSettings";
import SlideshowSettings from "./admincomponents/SlideshowSettings";
import Buyer from "./admincomponents/Buyer";
import Sellers from "./admincomponents/sellers";
import AddCategory from "./admincomponents/ParentCategory";
import Subcategory from "./admincomponents/Subcategory";
import InnerSubcategory from "./admincomponents/InnerSubcategory";
import LastSubcategory from "./admincomponents/LastSubCategory";
import ManageProducts from "./admincomponents/ManageProducts";
import ViewPages from "./admincomponents/ViewPages";
import EditPages from "./admincomponents/EditPages";
import Packagetag from "./admincomponents/Packagetag";
import BlogCategory from "./admincomponents/BlogCategory";
import BlogPost from "./admincomponents/BlogPost";
import AddBlogPost from "./admincomponents/AddBlogPost";
import EditBlogPost from "./admincomponents/EditBlogPost";
import FtaEnquries from "./admincomponents/FtaEnquries";
import WorldTrust from "./admincomponents/WorldTrust";
import IsoCertification from "./admincomponents/IsoCertification";
import PostBuyRequirement from "./admincomponents/PostBuyRequirement";
// *! *******************END OF ADMIN PANEL PAGE PATHS***************************

// *! *******************lOGIN SIGNUP PAGE PATHS***************************
import Login from "./UserAuthentication/Login";
import Signup from "./UserAuthentication/Signup";
import AdminLogin from "./UserAuthentication/AdminLogin";
import Forgotpassword from "./UserAuthentication/Forgotpassword";
import VerificationSignin from "./UserAuthentication/VerificationSignin";
import ResetConfirmPassowrd from "./UserAuthentication/ResetConfirmPassowrd";
// *! *******************END OF lOGIN SIGNUP PAGE PATHS***************************

//admin authentication
// import AdminSignin from "./UserAuthentication/AdminAuth";

import { useDispatch, useSelector } from "react-redux";
import SellerAuthpage
 from "./Components/SellerAuthpage";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  // const { pathname } = useLocation();

  // var { user } = useSelector((state) => state.Auth);s

  // const navigate=useNavigate()
  console.log(user);
  // console.log(user.role?user.role.updatedUser.role:"undefine")
  // data={role:"Buyer"}
  // useEffect(()=>{
  //   if(user&&user.role==="Seller"){
  //     navigate('/login')
  //   }

  // })
  const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>

        {/* {data && data.role === "Seller" && (
          <>
            <SellerHeader role="Seller" />
            <Sidenav role="Seller" />,
          </>
        )}
        
        {data && data.role === "Buyer" && (
          <>
            <Navbar role="Buyer" />
            <Section2 />
          </>
        )} 
        {/* <Sidenav /> */}
        {/* <SellerHeader/> */}

        {/* <AdminHeader />
        <AdminSidenav /> */}

        {/* SLLER PANEL */}
        {/* {user && user.role === "Seller" && ( */}
     

               
        <Routes>

          <Route
            path="/sellerhome"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <SellerHome />
              </React.Fragment>
            }
          />

          <Route
            path="/contactprofile"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <ContactProfile />
              </React.Fragment>
            }
          />

          ,
          <Route
            path="/leadesk"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Leaddesk />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/Productdetails"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Productdetails />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/servicepackage"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Service />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/currentleads"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Currentlead />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/Notifications"
            role="Seller"
            element={

              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Notifications />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/shortlisted"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Shortlist />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/sellermanageproducts"
            role="Seller"
            element={
              <React.Fragment>
              <PrivateRoute
              
              >
                <ManageProduct />
              </PrivateRoute>

              </React.Fragment>
            }
          />
          ,
          <Route
            path="/Editmanageproducts/:id"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Editmanageproducts />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/addproduct"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <AddProduct />{" "}
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/catalog"
            role="Seller"
            element={
              <React.Fragment>
                <SellerHeader />
                <Sidenav />
                <Catalog />{" "}
              </React.Fragment>
            }
          />
        </Routes>
        {/* ) } */}

        {/* // *! *******************HOME PAGE ROUTES*************************** */}

        {/* <Section2 /> */}
        <Routes>


          <Route
            path="/product-category"
            // role="Buyer"
            element={
              <React.Fragment>
                {" "}
                <Navbar />
                <Section2 /> <ProductCategory />
              </React.Fragment>
            }
          />
          ,
        <Route
            path="/sellerAuth"
            // role="Buyer"
            element={
              <React.Fragment>
                {" "}
                <Navbar />
                <Section2 /> <SellerAuthpage />
              </React.Fragment>
            }
          />
          <Route
            path="/"
            // role="Buyer"
            element={
              <React.Fragment>
                {" "}
                <Navbar />
                <Section2 /> <Home />
              </React.Fragment>
            }
          />
          ,
          <Route
            path="/product-subcat"
            // role="Buyer"
            element={<ProductSubCategory />}
          />
          ,
          <Route
            path="/product-inner-sub-cat"
            // role="Buyer"
            element={<ProductInnerSubCategory />}
          />
          ,
          <Route
            path="/Product-List"
            // role="Buyer"
            element={<ProductList />}
          />
          ,
          <Route
            path="/Product-Page"
            // role="Buyer"
            element={<ProductPage />}
          />
          ,
          <Route path="/About-us" role="Buyer" element={<AboutUs />} />,
          <Route path="/Career" role="Buyer" element={<Career />} />,
          <Route
            path="/Privacypolicy"
            // role="Buyer"
            element={<Privacypolicy />}
          />
          ,
          <Route
            path="/Termcondition"
            // role="Buyer"
            element={<Termcondition />}
          />
          ,
          <Route path="/ContactUs" role="Buyer" element={<ContactUs />} />
        </Routes>

        <Routes>
          {/* <Route path="/adminlogin" element={<AdminSignin/>}></Route> */}
          // *! **************SELLER PANEL ROUTES**********************
          {/* <Route path='/Slidepanel' element={<Slidpanel/>}/> */}
          // *! *******************ADMIN PANEL ROUTES***************************
          <Route
            path="/adminhome"
            element={
              <React.Fragment>
                {" "}
                <AdminHeader />
                <AdminSidenav />
                <AdminDashHome />
              </React.Fragment>
            }
          />
          <Route
            path="/callbackenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <PopupCallInquiries />{" "}
              </React.Fragment>
            }
          />
          <Route
            path="/productenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <ProductInquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/businessenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <BusinessInquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/PostBuyRequirements"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <PostBuyRequirement />
              </React.Fragment>
            }
          />
          <Route
            path="/freightsenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <FreightsEnquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/feedbackenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <FeedbackInquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/Efilinsenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <EFilings />
              </React.Fragment>
            }
          />
          <Route
            path="/Logisticsenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <LogisticsInquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/Exportenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <ExportInquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/servicesenq"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <ServicesProviderEnquiries />
              </React.Fragment>
            }
          />
          <Route
            path="/GeneralSettings"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <GeneralSettings />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/SlideshowSettings"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <SlideshowSettings />
              </React.Fragment>
            }
          />
          <Route
            path="/sellers"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <Sellers />
              </React.Fragment>
            }
          />
          <Route
            path="/buyer"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <Buyer />
              </React.Fragment>
            }
          />
          <Route
            path="/addcategory"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <AddCategory />
              </React.Fragment>
            }
          />
          <Route
            path="/addsubcategory"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <Subcategory />
              </React.Fragment>
            }
          />
          <Route
            path="/addinnersubcategory"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <InnerSubcategory />
              </React.Fragment>
            }
          />
          <Route
            path="/addlastsubcategory"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <LastSubcategory />
              </React.Fragment>
            }
          />
          <Route
            path="/manageproducts"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <ManageProducts />
              </React.Fragment>
            }
          />
          <Route
            path="/blogcategory"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <BlogCategory />
              </React.Fragment>
            }
          />
          <Route
            path="/blogposts"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <BlogPost />
              </React.Fragment>
            }
          />
          <Route
            path="/pages"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <ViewPages />
              </React.Fragment>
            }
          />
          <Route
            path="/addBlogpost"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <AddBlogPost />
              </React.Fragment>
            }
          />
          <Route
            path="/editBlogpost"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <EditBlogPost />
              </React.Fragment>
            }
          />
          <Route
            path="/editpages"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <EditPages />
              </React.Fragment>
            }
          />
          <Route
            path="/packagetag"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <Packagetag />
              </React.Fragment>
            }
          />
          <Route
            path="/ftaEnquries"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <FtaEnquries />
              </React.Fragment>
            }
          />
          <Route
            path="/WorldTrust"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <WorldTrust />
              </React.Fragment>
            }
          />
          <Route
            path="/IsoCertification"
            element={
              <React.Fragment>
                <AdminHeader />
                <AdminSidenav />
                <IsoCertification />
              </React.Fragment>
            }
          />
          // *! ************LOGIN SIGN UP PAGE ROUTES*******
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/uservalidate" element={<VerificationSignin />} />
          <Route path="/c" element={<ResetConfirmPassowrd />} />
        </Routes>
        <Footer />
        {/* <FloatingAction/> */}
        {/* <SpeedDialTooltipOpen /> */}
        {/* <AdminFooter /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
