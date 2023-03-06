import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import Switch from "@mui/material/Switch";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

function BlogCategory() {
  // add category modal
  const [AddBlogCat, setAddBlogCat] = React.useState(false);
  const showModal = () => {
    setAddBlogCat(true);
  };

  const hideModal = () => {
    setAddBlogCat(false);
  };

  //   edit category modal
  const [EditBlogCat, setEditBlogCat] = React.useState(false);
  const showModal2 = () => {
    setEditBlogCat(true);
  };

  const hideModal2 = () => {
    setEditBlogCat(false);
  };
  const [checked, setChecked] = React.useState(true);
  // onchange for button on off
  const handleChange = () => {
    // setChecked(event.target.checked);
  };
  return (
    <>
      <div className="col-12 admin-dash-cont">
        <Modal show={AddBlogCat} onHide={hideModal}>
          <ModalHeader closeButton>
            <ModalTitle>Add Blog Category</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown w-50">
                  <select
                    className="form-select pt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
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
              onClick={hideModal}
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
            >
              Save
            </button>
          </ModalFooter>
        </Modal>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
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
              Blog Category
            </h3>
            <div className="mt-2 d-flex">
              <button
                type="button"
                className="btn btn-secondary modal-btn"
                onClick={showModal}
              >
                Add Blog Category
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Agriculture</td>

                  <td>
                    {" "}
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </td>

                  <td>
                    <div
                      className="buttonsEnq"
                      style={{ flexDirection: "row" }}
                    >
                      <button
                        type="button"
                        className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                        title="Comment"
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
                <tr>
                  <th scope="row">2</th>
                  <td>Hardware</td>

                  <td>
                    {" "}
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </td>

                  <td>
                    <div
                      className="buttonsEnq"
                      style={{ flexDirection: "row" }}
                    >
                      <button
                        type="button"
                        className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                        title="Comment"
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
                <tr>
                  <th scope="row">3</th>
                  <td>Food</td>

                  <td>
                    {" "}
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </td>

                  <td>
                    <div
                      className="buttonsEnq"
                      style={{ flexDirection: "row" }}
                    >
                      <button
                        type="button"
                        className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                        title="Comment"
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
                <tr>
                  <th scope="row">4</th>
                  <td>Mechanics</td>

                  <td>
                    {" "}
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </td>

                  <td>
                    <div
                      className="buttonsEnq"
                      style={{ flexDirection: "row" }}
                    >
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
          <Modal show={EditBlogCat} onHide={hideModal2}>
            <ModalHeader closeButton>
              <ModalTitle>Edit Blog Category</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Category Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="dropdown w-50">
                    <select
                      className="form-select pt-2"
                      aria-label="Disabled select example"
                    >
                      <option selected="">Status</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                    </select>
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
              >
                Save
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default BlogCategory;
