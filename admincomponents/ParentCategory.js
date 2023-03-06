import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
// import { Modal, Button } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";
import { useSelector, useDispatch } from "react-redux";
import { getCategory, CreateCategories } from "../action/productAction";

function AddCategory() {
  const categorylists = useSelector((state) => state.products.categorylist);
  const [category,setCategory]=useState()

  const [state, setstate] = useState(categorylists);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);



  // add category modal
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  //   
  const [isOpen2, setIsOpen2] = React.useState(false);
  const showModal2 = () => {
    setIsOpen2(true);
  };
  
 
  const hideModal2 = () => {
    setIsOpen2(false);
  };
  
const click=(e)=>{
e.preventDefault()

const formdata={
  name:category
}
console.log(formdata.name)
dispatch(CreateCategories(formdata))
}
  //   const modalLoaded = () => {
  //     setTitle("Modal Ready");
  //   };
  return (
    <>
      <div className="col-12 admin-dash-cont">
        {/* Add category modal */}
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container d-flex justify-content-between">
              <div className="row mr-2 w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category Name"
                  aria-label="Name"
                  onChange={(e)=>setCategory(e.target.value)}
                  aria-describedby="basic-addon1"
                />
                <div className="dropdown mt-4">
                  <select
                    className="form-select"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="row ml-2">
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Display Order"
                    aria-label="Display Order"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="mt-4">
                  <input
                    // style={{ fontSize: "12px" }}
                    type="file"
                    className="form-control"
                    //   placeholder="Icon"
                    //   aria-label="Icon"
                    aria-describedby="basic-addon1"
                  />
                </div>
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
                    onClick={click}

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
            <h3 className="admin-nav-titlee">Add Category</h3>
            <div className="mt-2 d-flex">
              <button
                type="button"
                className="btn btn-secondary modal-btn"
                onClick={showModal}
              >
                Add Category
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

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Icon</th>
                  <th scope="col">Display order</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>

                  {categorylists&& categorylists.map((data) => {
                    return (
                      <>
                        <td>{data.name}</td>
                      </>
                    );
                  })}
                  <td></td>
                  <td>Otto</td>     
                  <td>@mdo</td>
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
        </div>

        {/* Add category modal */}
        <Modal show={isOpen2} onHide={hideModal2}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container d-flex justify-content-between">
              <div className="row mr-2 w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />

                <div className="dropdown mt-4">
                  <select
                    className="form-select"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Display Order</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="row ml-2">
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Display Order"
                    aria-label="Display Order"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="mt-4">
                  <input
                    // style={{ fontSize: "12px" }}
                    type="file"
                    className="form-control"
                    //   placeholder="Icon"
                    //   aria-label="Icon"
                    aria-describedby="basic-addon1"
                  />
                </div>
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
    </>
  );
}

export default AddCategory;
