import React from "react";
import Modal from "react-bootstrap/Modal";
import { IoAdd } from "react-icons/io5";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function PopupCallInquiries() {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  // edit buyer
  const [isOpen2, setIsOpen2] = React.useState(false);
  const showModal2 = () => {
    setIsOpen2(true);
  };

  const hideModal2 = () => {
    setIsOpen2(false);
  };
  return (
    <>
      <div className="col-12 admin-dash-cont">
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Buyer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container ">
                <div className="row">
                  <label htmlFor="">
                    Buyer Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Buyer Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </label>
                  <label className="mt-2" htmlFor="">
                    UserName
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter UserName"
                        aria-label="UserName"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </label>
                </div>
                <div className="row" >
                  <label htmlFor="">
                    Email
                    <div className="">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Buyer Email"
                        aria-label="Emai"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </label>
                  <label htmlFor="" className="mt-4">
                    Company Name
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Name"
                        aria-label="Company"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </label>
                </div>
             
              <div className="row mt-4">
                <label htmlFor="" className="w-50">
                  Password
                  <div className="">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Buyer Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </label>
                <label htmlFor="" className="w-50">
                  Confirm password
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name"
                      aria-label="Company"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </label>
              </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                style={{
                  backgroundColor: "#0e5176",
                  color: "white",
                  padding: "5px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={hideModal}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "#0e5176",
                  color: "white",
                  padding: "5px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Save
              </button>
            </Modal.Footer>
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
              Buyer
            </h3>

            <div className="mt-2 d-flex">
              <button
                type="button"
                className="btn modal-btn"
                onClick={showModal}
              >
                Add Buyer
                <IoAdd />
              </button>
            </div>
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
                  <th scope="col">Enquiry</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Ramesh</td>
                  <td>Ramesh@gmail.com</td>
                  <td>N/A</td>
                  <td>9876543210</td>
                  <td>N/A</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm p-0"
                        title="Edit"
                        onClick={showModal2}
                      >
                        <AiOutlineEdit />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm p-0"
                        title="Delete"
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Modal show={isOpen2} onHide={hideModal2}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Buyer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container ">
                <div className="row">
                  <label htmlFor="">
                    Buyer Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Buyer Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </label>
                  <label className="mt-2" htmlFor="">
                    UserName
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter UserName"
                        aria-label="UserName"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </label>
                </div>
                <div className="row" >
                  <label htmlFor="">
                    Email
                    <div className="">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Buyer Email"
                        aria-label="Emai"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </label>
                  <label htmlFor="" className="mt-4">
                    Company Name
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Name"
                        aria-label="Company"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </label>
                </div>
             
              <div className="row mt-4">
                <label htmlFor="" className="w-50">
                  Password
                  <div className="">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Buyer Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </label>
                <label htmlFor="" className="w-50">
                  Confirm password
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name"
                      aria-label="Company"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </label>
              </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                style={{
                  backgroundColor: "#0e5176",
                  color: "white",
                  padding: "5px",
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
                  padding: "5px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Save
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default PopupCallInquiries;
