import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

function Sidenav() {
  return (
    <div className="col-4">
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <NavbarLink>
          <img
            src="../logoo.png"
            style={{ height: "60px", width: "100%" }}
            alt="logo"
          />
          <hr style={{ backgroundColor: "#c3c3c3", margin: "0px" }} />
        </NavbarLink>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>

            <div className="info">
              <NavbarLink id="helloadmin" className="d-block">
                Hello Admin !!
              </NavbarLink>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              //   data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open"></li>
              <li className="nav-item">
                <NavbarLink to="/" className="nav-link">
                  <i className="fa-solid fa-gauge nav-icon" />

                  <p> Dashboard</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    All Inquiries
                    <i className="fas fa-angle-left right" />
                  </p>
                </NavbarLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavbarLink to="/callbackenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Popup/Callback</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/productenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Product Inquiries</p>
                    </NavbarLink>
                  </li>

                  <li className="nav-item">
                    <NavbarLink to="/businessenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Business Inquiries</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/PostBuyRequirements" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Post Buy Requirements</p>
                    </NavbarLink>
                  </li>

                  <li className="nav-item">
                    <NavbarLink to="/freightsenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Freights</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/feedbackenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Feedback</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/Logisticsenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Logistics</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/Exportenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Export</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/servicesenq" className="nav-link">
                      <i className="fa-regular fa-clipboard  nav-icon"></i>
                      <p>Services Provider</p>
                    </NavbarLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavbarLink className="nav-link">
                  <i className="fa-solid fa-gear nav-icon"></i>
                  <p>
                    Settings
                    <i className="right fas fa-angle-left" />
                  </p>
                </NavbarLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavbarLink to="/SlideshowSettings" className="nav-link">
                      <i className="fa-solid fa-sliders nav-icon"></i>
                      <p>Slideshow Settings</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/GeneralSettings" className="nav-link">
                      <i className="fa-solid fa-gears nav-icon"></i>
                      <p>General Settings</p>
                    </NavbarLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavbarLink className="nav-link">
                  <i className="fa-solid fa-users nav-icon"></i>
                  <p>
                    User Roles
                    <i className="fas fa-angle-left right" />
                  </p>
                </NavbarLink>
                <ul className="nav nav-treeview">
                
                  <li className="nav-item">
                    <NavbarLink to="/buyer" className="nav-link">
                      <i className="fa-solid fa-cart-shopping nav-icon"></i>
                      <p>Buyer</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/sellers" className="nav-link">
                      <i className="fa-solid fa-shop nav-icon"></i>
                      <p>Sellers</p>
                    </NavbarLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavbarLink className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Manage Categories
                    <i className="fas fa-angle-left right" />
                  </p>
                </NavbarLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavbarLink to="/addcategory" className="nav-link">
                      <i className="fa-solid fa-list nav-icon"></i>
                      <p>Category</p>
                    </NavbarLink>
                  </li>

                  <li className="nav-item">
                    <NavbarLink to="/addsubcategory" className="nav-link">
                      <i className="fa-solid fa-list nav-icon"></i>
                      <p>Sub Category</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/addinnersubcategory" className="nav-link">
                      <i className="fa-solid fa-list nav-icon"></i>
                      <p>Inner Sub Category</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/addlastsubcategory" className="nav-link">
                      <i className="fa-solid fa-list nav-icon"></i>
                      <p>Last Sub Category</p>
                    </NavbarLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavbarLink to="/manageproducts" className="nav-link">
                  <i className="fa-solid fa-list-check nav-icon"></i>
                  <p>Manage Products</p>
                </NavbarLink>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link">
                  <i className="fa-solid fa-cart-shopping nav-icon"></i>
                  <p>
                    Products
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavbarLink to="/manageproducts" className="nav-link">
                      <i className="fa-solid fa-list-check nav-icon"></i>
                      <p>Manage Products</p>
                    </NavbarLink>
                  </li>
                 
                </ul>
              </li> */}
              <li className="nav-header">More</li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fa-regular fa-clipboard  nav-icon"></i>
                  <p>
                    Blog
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavbarLink to="/blogcategory" className="nav-link">
                      <i className="fa-solid fa-list nav-icon"></i>
                      <p>Blog Category</p>
                    </NavbarLink>
                  </li>
                  <li className="nav-item">
                    <NavbarLink to="/blogposts" className="nav-link">
                      <i className="fa-solid fa-image-portrait nav-icon"></i>
                      <p>Blog Post</p>
                    </NavbarLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavbarLink to="/pages" className="nav-link">
                  <i className="fa-solid fa-book nav-icon"></i>
                  <p>Pages</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink className="nav-link">
                  <i className="fa-solid fa-users nav-icon"></i>
                  <p>Visitors</p>
                </NavbarLink>
              </li>

              <li className="nav-item">
                <NavbarLink to="/packagetag" className="nav-link">
                  <i className="fa-regular fa-star nav-icon"></i>
                  <p>Package Tag</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink to="" className="nav-link">
                  <i className="fa-solid fa-rectangle-ad nav-icon"></i>
                  <p>Advertise</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink to="/Efilinsenq" className="nav-link">
                  <i className="fa-regular fa-file-lines nav-icon"></i>
                  <p>E-Fillings</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink to="/ftaEnquries" className="nav-link">
                  <i className="fa-solid fa-globe nav-icon"></i>
                  <p>FTA Certificate Enquries</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink to="/WorldTrust" className="nav-link">
                  <i className="fa-solid fa-earth-americas nav-icon"></i>
                  <p>World Trust</p>
                </NavbarLink>
              </li>
              <li className="nav-item">
                <NavbarLink to="/IsoCertification" className="nav-link">
                  <i className="fa-solid fa-certificate nav-icon"></i>
                  <p>ISO Certifications</p>
                </NavbarLink>
              </li>
            </ul>
          </nav>

          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}

export default Sidenav;
