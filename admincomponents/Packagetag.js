import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
// import { Modal, Button } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";

function Packagetag() {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  //   edit category modal
  const [isOpen2, setIsOpen2] = React.useState(false);
  const showModal2 = () => {
    setIsOpen2(true);
  };

  const hideModal2 = () => {
    setIsOpen2(false);
  };

  return (
    <div className="col-12 admin-dash-cont">
      {/* Add category modal */}
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container d-flex justify-content-between">
            <div className="row mr-2">
              <label htmlFor="">
                Package Name
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter package Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </label>
              <label className="mt-4" htmlFor="">
                Total Leades
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Value"
                    aria-label="Total Leades"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </label>
            </div>
            <div className="row">
              <label htmlFor="">
                Price of Package
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </label>
              <label className="mt-4" htmlFor="">
                Upload Package Image
                <div className="">
                  <input
                    type="file"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </label>
            </div>
          </div>
          <label className="mt-4 w-100" htmlFor="">
            Upload Package Documents
            <div>
              <input
                type="file"
                className="form-control"
                placeholder="Upload Documents"
                aria-describedby="basic-addon1"
              />
            </div>
          </label>
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
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper ">
        <div className="adminSubNav">
          <h3 className="admin-nav-titlee">Add Packages</h3>
          <div className="mt-2 d-flex">
            <button
              type="button"
              className="btn btn-secondary"
              className="modal-btn"
              onClick={showModal}
            >
              Add Packages
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
                <select name="example_length" aria-controls="example" className="">
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

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Total Leades</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Silver</td>
                <td>25000</td>
                <td>500</td>
                <td>image</td>
                <td>
                  <div className="buttonsEnq" style={{ flexDirection: "row" }}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                      title="Edit"
                      onClick={showModal2}
                    >
                      <AiOutlineEdit />
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
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
      </div>
      {/* Add category modal */}
      <Modal show={isOpen2} onHide={hideModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container d-flex justify-content-between">
            <div className="row mr-2">
              <label htmlFor="">
                Package Name
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter package Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </label>
              <label className="mt-4" htmlFor="">
                Total Leades
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Value"
                    aria-label="Total Leades"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </label>
            </div>
            <div className="row">
              <label htmlFor="">
                Price of Package
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </label>
              <label className="mt-4" htmlFor="">
                Upload Package Image
                <div className="">
                  <input
                    type="file"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </label>
            </div>
          </div>
          <label className="mt-4 w-100" htmlFor="">
            Upload Package Documents
            <div>
              <input
                type="file"
                className="form-control"
                placeholder="Upload Documents"
                aria-describedby="basic-addon1"
              />
            </div>
          </label>
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
  );
}

export default Packagetag;
