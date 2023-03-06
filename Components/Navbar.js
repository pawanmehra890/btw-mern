import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { ImLocation2 } from "react-icons/im";
import { GrFormNext } from "react-icons/gr";
import { BsFillMicFill, BsSearch } from "react-icons/bs";
import { BiCaretDown } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Input,
  // ChevronDownIcon,
  Button,
  Flex,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { UpdateRole } from "../action/Authaction";

import {
  fetchSellerDetails,
  getContactProfileById,
} from "../action/AdminAction";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {



    

  // const [selectedRole, setSelectedRole] = useState("select");

  // const dispatch = useDispatch();

  return (
    <>

      {/* <select
        value={selectedRole}
        onChange={(e) => {
          setSelectedRole(e.target.value);
          dispatch(UpdateRole(e.target.value));
        }}
      >
        <option value="">selec</option>
        <option value="Buyer">buyer<ama/option>
        <option value="Seller">seller</option>
      </select> */}
      <div className="main-headers">
        <div className="headers-items">
          {/* haader logo */}
          <div className="img-logoo">
            <Link to="/">
              <img className="main-logo" src="./img/logo.svg" alt="company" />
            </Link>
          </div>

          <div className="search-bar-items d-flex">
            <div className="dropdown location-dropdown">
              <Menu>
                <MenuButton
                  as={Button}
                  className="d-flex dropdown-btn--searchbar"
                  size="sm"
                >
                  <div className="d-flex">
                    <span className="px-2">
                      <img src="./img/india.png" alt="flag" />
                    </span>
                    <span className="location-name">City</span>
                    <BiCaretDown />
                  </div>
                </MenuButton>
                <MenuList>
                  <span className="upward-icon"></span>
                  <MenuItem>
                    <div className="d-flex">
                      {" "}
                      <span id="current-location-txt">
                        <ImLocation2 style={{ display: "inline" }} />
                        Get Current location
                      </span>
                      <span style={{ color: "blue" }} className="d-flex">
                        Detect using GPS{" "}
                        <GrFormNext style={{ margin: "auto", color: "blue" }} />
                      </span>
                    </div>
                  </MenuItem>
                  <Divider />
                  {/* <MenuItem> */}{" "}
                  <form className="d-flex">
                    <Input
                      className="drop-down-location-search"
                      type="search"
                      placeholder="Search your location"
                      size="md"
                    />
                    <Button
                      style={{
                        background: "transparent",
                        border: "none",
                        padding: "4px",
                      }}
                    >
                      <BsSearch style={{ margin: "auto" }} />
                    </Button>
                  </form>
                  {/* </MenuItem> */}
                </MenuList>
              </Menu>

              {/* <button
                className="dropdown-btn--searchbar"
                type="button"
                data-bs-toggle="dropdown"
                // aria-expanded="false"
              >
                <span className="px-2">
                  <img src="./img/india.png" alt="flag" />
                </span>
                <span className="location-name">City</span>
              </button>
              <ul className="dropdown-menu button-dropdown-items">
                <span className="upward-icon"></span>
                <li>
                  <span id="current-location-txt">
                    <ImLocation2 />
                    Current location
                  </span>{" "}
                  <button className="current-location-btn">
                    <span style={{ color: "blue" }}>
                      Detect using GPS &#62;
                    </span>
                  </button>
                </li>
                <hr />
                <li>
                  <form className="d-flex">
                    <input
                      className="drop-down-location-search"
                      type="search"
                      enterKeyHint="search"
                      placeholder="Search for your area"
                    />
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        padding: "4px",
                      }}
                    >
                      <BsSearch style={{ margin: "auto" }} />
                    </button>
                  </form>
                </li>
              </ul> */}
            </div>

            <div className="search-bar-header">
              <form>
                {/* <button style={{background: "transparent", border: "none", position: "absolute", padding: "4px 0px 0px 3px" }}>
                  <BsSearch style={{ margin: "auto"}} />
                </button> */}
                <input
                  type="search"
                  enterKeyHint="search"
                  placeholder="Search products here"
                />
                <button
                  className="search-mic"
                  style={{ background: "transparent", border: "none" }}
                >
                  <BsFillMicFill style={{ display: "inline-block" }} />
                </button>
              </form>
            </div>
          </div>
          {/* searchbar */}

          {/* Buyer and suppliers button */}
          <div className="buttons d-flex header-btns">
            <div className="user-btn">
              <div className=" btn1 ">
                <Menu>
                  <MenuButton as={Button} style={{ fontWeight: "500" }}>
                    <span className="d-flex">
                      For Buyer
                      <BiCaretDown />
                    </span>
                  </MenuButton>
                  <MenuList className=" drop-menu">
                    <MenuItem>Post Buy Requirement</MenuItem>
                    <MenuItem>Search Suppliers</MenuItem>
                    <MenuItem>Request a Callback</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>

            <div className="user-btn">
              <div className=" btn-2 ">
                <Menu>
                  <MenuButton as={Button} style={{ fontWeight: "500" }}>
                    <span className="d-flex">
                      For Seller
                      <BiCaretDown />
                    </span>
                  </MenuButton>
                  <MenuList className=" drop-menu">
                    <MenuItem>Search Buy Leades</MenuItem>
                    <MenuItem>Get Fright Quotes</MenuItem>
                    <MenuItem>Logistics</MenuItem>
                    <MenuItem>Export Bill Discounting</MenuItem>
                    <MenuItem>WCT Certificate</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            {/* <div className="user-btn">
              <div className="dropdown btn-2">
                <button
                  className="btn .btn-sm btn-light buyer-suplier-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Supplier <i className="fa-solid fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
