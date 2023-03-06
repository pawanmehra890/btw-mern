import React, { useState, useEffect } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";
import { GoSignIn } from "react-icons/go";
import { BiLogIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { UpdateRole } from "../action/Authaction";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import ContactProfile from "../sellerdashboard/ContactProfile";
import { GetContactprofileBylogin } from "../action/productAction";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ButtonGroup,
  WrapItem,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useParams, useHistory } from "react-router-dom";
// import { UpdateRole } from "../action/Authaction";

import {
  fetchSellerDetails,
  getContactProfileById,
} from "../action/AdminAction";

// import { useDispatch, useSelector } from "react-redux";

const Section2 = () => {
  // To change burger classes

  const datas = useSelector((state) => state.products);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [selectedRole, setSelectedRole] = useState("select");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  // console.log(data.role)

  const token = useSelector((state) => state.Auth);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      setUserType(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserType(null);
  };
  const handleUserTypeSelect = (selectedUserType) => {
    setUserType(selectedUserType);
  };

  const dispatch = useDispatch();

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    dispatch(GetContactprofileBylogin(userId));
  }, [dispatch, userId]);

  return (
    <>
      {/* Section 2 */}
      <div></div>
      <div className="section-2">
        <div className="cont-sec-2">
          <div className="hamburger-sec">
            <div className="hamburgur">
              <div className="main-ham">
                <nav className="ham-nav">
                  <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="hamburger-text">
              <button className="text-ham" onClick={updateMenu}>
                Browse All Categories
              </button>
            </div>
          </div>

          <div className="btn-login-signup">
            <Menu>
              <MenuButton className="help-button mr-3">
                <span
                  className="login-signup-btn-span"
                  style={{ marginRight: "3px" }}
                >
                  Help
                </span>{" "}
                <BiHelpCircle className="help-icon d-inline m-auto" />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <EmailIcon /> Leave a message
                </MenuItem>
                <MenuItem>
                  <PhoneIcon />
                  Call Us
                </MenuItem>
              </MenuList>
            </Menu>
            {loggedIn ? (
              <>
                <Menu>
                  <MenuButton
                    className="avtaar-btn-home"
                    as={Button}
                    background={"transparent"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    <WrapItem>
                      <Flex>
                        <Avatar
                          size="sm"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <Text fontWeight={500} className="ml-2" margin={"auto"}>
                          {user.firstName}
                        </Text>
                      </Flex>
                    </WrapItem>
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <MenuItem
                        onClick={() => {
                          setSelectedRole("Buyer");
                          dispatch(UpdateRole("Buyer"));
                        }}
                      >
                        Buyer
                      </MenuItem>
                      <Link to="/sellerAuth">
                        <MenuItem
                          onClick={() => {
                            setSelectedRole("Seller");
                            dispatch(UpdateRole("Seller"));
                          }}
                        >
                          Seller
                        </MenuItem>
                      </Link>
                    </MenuGroup>

                    <MenuDivider />
                    <MenuGroup title="Help">
                      <MenuItem>Contact</MenuItem>
                      <MenuItem>FAQ</MenuItem>
                      <MenuItem>Another One</MenuItem>
                    </MenuGroup>
                    <MenuDivider />

                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button>
                  <NavLink to="/login">
                    <span className="d-flex login-signup-btn-span">
                      Login{" "}
                      <HiOutlineLogin
                        style={{ marginLeft: "5px", margin: "auto" }}
                      />
                    </span>
                  </NavLink>
                </Button>
                <Button>
                  <NavLink to="/register">
                    <span className="d-flex login-signup-btn-span">
                      {" "}
                      Register Free{" "}
                      <GoSignIn style={{ marginLeft: "5px", margin: "auto" }} />
                    </span>
                  </NavLink>
                </Button>
              </ButtonGroup>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger dropdown  */}
      <div className={menu_class}>
        <div className="hamburger-drop">
          <ul className="hamburger-items">
            <li className="ham-item">
              <span>Agriculture</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture1</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="ham-item">
              <span>Food & Beverage</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture2</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="ham-item">
              <span>Appareal & Fashion</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture3</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="ham-item">
              <span>Pharmaceuticals</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture4</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="ham-item">
              <span>Hospital & Medical Supplies</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture5</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="ham-item">
              <span>AutoMobile</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture6</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="ham-item">
              <span>Brass Hardware & Components</span>
              <hr className="horizontal-line" />
              <div className="megadrop">
                <div className="row ham-li-row">
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture7</h6>
                      <li>product </li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3">
                    <ul>
                      <h6 className="li-item-category">Agriculture</h6>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li>product</li>
                      <li className="li-item-show-more">View more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="ham-item">
              <span>All Categories</span>{" "}
              <h6
                className="fa fa-chevron-circle-right"
                aria-hidden="true"
              ></h6>
            </li>
          </ul>
        </div>

        <div className="ham-buttons">
          {/* buyer and seller hamburger item 
          <div className="buttons d-flex">
            <div className="buttons d-flex header-btns">
              <div className="user-btn btn-active">
                <div className=" btn1 ">
                  <Menu>
                    <MenuButton
                      size="sm"
                      as={Button}
                      style={{ fontWeight: "500" }}
                    >
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
              <div className="buttons d-flex header-btns">
                <div className="user-btn btn-active">
                  <div className=" btn2 ">
                    <Menu>
                      <MenuButton
                        size="sm"
                        as={Button}
                        style={{ fontWeight: "500" }}
                      >
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
              </div>
            </div>
          </div>
          {/* login sign up hamburger */}
          {/* <div className="btn-login-signup d-flex">
            <button className="btn-login login-signup active">
              <BiLogIn className="login-signup-btns" /> <span>Login</span>
            </button>
            <button className="btn-signup login-signup active">
              <BiLogIn className="login-signup-btns" /> <span>Sign Up</span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Section2;
