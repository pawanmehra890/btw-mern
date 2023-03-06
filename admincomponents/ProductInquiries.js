import React, { useState } from "react";
// import { GoComment } from 'react-icons/go';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { IoCheckmarkSharp, IoAdd } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import "../bootsta";
import "./ProductpageModal.css";

function ProductInquiries() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product Requirement Enquiry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            className="row"
            action="/"
            method="POST"
            id="popupInquiryForm"
            data-gtm-form-interact-id="0"
          >
            <input type="hidden" name="_token" value="hidden-token" />
            <div className="form-group col-sm-6 modal-form">
              <input
                type="text"
                className="form-control shadow form-modal modal-input"
                placeholder="Product Name"
                name="user_name"
                id="user_name"
              />
            </div>
            <div className="form-group col-sm-6 modal-form">
              <input
                type="text"
                className="form-control shadow form-modal modal-input"
                placeholder="Buyer Name"
                name="user_name"
                id="user_name"
              />
            </div>
            <div className="form-group col-sm-6 modal-form">
              <input
                className="form-control shadow form-modal modal-input"
                type="Email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="form-group col-sm-6 modal-form">
              <input
                type="tel"
                className="form-control shadow modal-input"
                placeholder="Contact No."
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>

            <div className="form-group modal-form-group col-sm-12">
              <textarea
                rows="4"
                className="form-control shadow modal-input"
                name="requirements"
                id="requirements"
              >
                I want to buy this product.
              </textarea>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: "#0e5176" }} onClick={handleClose}>
            Add Enquiry
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-12 admin-dash-cont">
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
              Product Inquiries
            </h3>
          </div>
          <hr />

          <div className="table-section">
            <div className="tablenav">
              <div className="sorting ml-2 mb-2">
                <div className="buttonsEnqq">
                  <button type="button" className="btn btn-success">
                    Export to Excel
                  </button>
                  <button
                    type="button"
                    className="btn btn-success ml-2"
                    onClick={handleShow}
                  >
                    <IoAdd /> Add Inquiry
                  </button>
                </div>
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
                  <th scope="col">Mobile</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Requirement</th>
                  <th scope="col">Date/Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Ramesh</td>
                  <td>Ramesh@gmail.com</td>
                  <td>9876543210</td>
                  <td>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>N/A</td>
                  <td>17-01-2023</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm p-0"
                        title="Edit"
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
                      <button
                        type="button"
                        className="btn btn-warning btn-sm p-0"
                        title="Verify"
                      >
                        <IoCheckmarkSharp />
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm p-0"
                        title="Send Seller Lead"
                      >
                        <IoIosSend />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Ayush</td>
                  <td>Ays@gmail.com</td>
                  <td>9876543219</td>
                  <td>Garments</td>
                  <td>N/A</td>
                  <td>15-01-2023</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm p-0"
                        title="Edit"
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
                      <button
                        type="button"
                        className="btn btn-warning btn-sm p-0"
                        title="Verify"
                      >
                        <IoCheckmarkSharp />
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm p-0"
                        title="Send Seller Lead"
                      >
                        <IoIosSend />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>XYZ</td>
                  <td>xyz@gmail.com</td>
                  <td>9876543219</td>
                  <td>Honey</td>
                  <td>N/A</td>
                  <td>14-01-2023</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm p-0"
                        title="Edit"
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
                      <button
                        type="button"
                        className="btn btn-warning btn-sm p-0"
                        title="Verify"
                      >
                        <IoCheckmarkSharp />
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm p-0"
                        title="Send Seller Lead"
                      >
                        <IoIosSend />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInquiries;
