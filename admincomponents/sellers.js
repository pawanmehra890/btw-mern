import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSellerDetails,
  getContactProfileById,
  updateContactProfile,
  deleteContactProfile,
} from "../action/AdminAction";
// import { useHistory } from 'react-router-dom';

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
import { ModalBody } from "react-bootstrap";

import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import { ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Sellers() {
  // const history = useHistory();

  const [selectedUser, setSelectedUser] = useState();
  const { Singleuser } = useSelector((state) => state.AdminData);
  const [errr, setError] = useState(false);
  const [firstname, setFirstName] = useState();
  const [phone, setPhoneno] = useState();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const sellerDetails = useSelector((state) => state.AdminData.Data);
  const { id } = useParams();
//  const history=useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellerDetails());
  }, [dispatch]);

  const [subcatedit, setsubcatedit] = React.useState(false);
  const showModal2 = () => {
    setsubcatedit(true);
  };

  const hideModal2 = () => {
    setsubcatedit(false);
  };

  // Edit and showing data of seller
  useEffect(() => {
    setPhoneno(Singleuser?.phone || "");
    setFirstName(Singleuser?.firstname || "");
  }, [Singleuser]);
 const navigate=useNavigate()
  // Updating data of the seller
  const handleclick = (e) => {
    if (firstname.length == 0) {
      setError(true);
    }
    e.preventDefault();
    const obj={
      firstname:firstname
    }
    console.log(obj)
   
    dispatch(updateContactProfile(obj, selectedUserId));

  };
  // const Navigate = useNavigate();

  function handleUserSelect(id) {
    const user = sellerDetails.find((user) => user._id === id);
    setSelectedUser(user);
    setSelectedUserId(id)
    dispatch(getContactProfileById(id));

    showModal2();
  }

  // Deleting the Seller
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this contact profile")) {
      dispatch(deleteContactProfile(id));
      console.log("delte");
    }
  };
  return (
    <>
      <div className="col-12 admin-dash-cont">
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Modal show={subcatedit} onHide={hideModal2}>
            <ModalHeader closeButton>
              <ModalTitle>Update Seller Details</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div className="contaInner">
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      name="firstname"
                      type="text"
                      value={firstname}
                      className="form-control"
                      placeholder="Seller Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={Singleuser.email}
                      placeholder="Seller Email"
                      aria-label="sellerEmail"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={phone}
                      placeholder="Mobile Number"
                      aria-label="mobileNumber"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Assign Account Manager"
                      aria-label="accountManager"
                      value={Singleuser.accountManager}
                      name="accountManager"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                style={{
                  backgroundColor: "#0e5176",
                  color: "white",
                  padding: "5px 10px 5px 10px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={hideModal2}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "#0e5176",
                  color: "white",
                  padding: "5px 10px 5px 10px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={handleclick}
              >
                Save
              </button>
            </ModalFooter>
          </Modal>

          <div
            className="adminSubNav"
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <h3
              className=" mt-2"
              style={{
                margin: "auto",
                color: "#0e5176",
                fontWeight: "bold",
                // display: "flex",
                // justifyContent: "center",
              }}
            >
              Sellers
            </h3>
          </div>
          <hr />

          <div className="table-section">
            <div className="tablenav">
              <div className="sorting ml-2">
                <label>
                  Show{" "}
                  <select
                    name="example_length"
                    aria-controls="example"
                    className=""
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <div className="tableSearchbar mb-3 mr-2">
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Total leads</th>
                  <th scope="col">Receive leads</th>
                  <th scope="col">Receive leads</th>
                  <th scope="col">Account Manager</th>
                  <th scope="col">Domain URL</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <th scope="row">{index + 1}</th> */}
                {sellerDetails   &&  sellerDetails.map((user) => {
                    return (
                      <>
                        <tr>
                          <td>{user.firstname}</td>
                          <td>{user.phone}</td>
                          <td>{user.companyname}</td>
                          <td>{user.country}</td>
                          <td>30</td>
                          <td>30</td>
                          <td>30</td>
                          <td>30</td>
                          <td>Anil Sen</td>
                          <td>Url</td>
                          <td>
                            <div className="buttonsEnq">
                              <button
                                type="button"
                                className="btn btn-success btn-sm p-0"
                                title="Add Account Manager"
                              >
                                <MdAddBox style={{ display: "inline" }} />
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm p-0"
                                title="Edit"
                              >
                                <AiOutlineEdit
                                  style={{ display: "inline" }}
                                  onClick={() => handleUserSelect(user._id)}
                                />
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm p-0"
                                title="Delete"
                                onClick={() => handleDelete(user._id)}
                              >
                                <AiOutlineDelete
                                  style={{ display: "inline" }}
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sellers;
