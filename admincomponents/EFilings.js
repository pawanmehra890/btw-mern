import React from "react";
import { GoComment } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoCheckmarkSharp, IoAdd } from "react-icons/io5";

function EFilings() {
  return (
    <>
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
              E-Filings Inquiries
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
                  <th scope="col">Mobile</th>
                  <th scope="col">state</th>
                  <th scope="col">City</th>
                  <th scope="col">Registration</th>
                  <th scope="col">Detail of Dervices</th>
                  <th scope="col">Description</th>
                  <th scope="col">Comment</th>
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
                  <td>Buyer</td>
                  <td>Delhi</td>
                  <td>Contact Us</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>17-01-2023</td>
                  <td >
                    <div className="buttonsEnq">
                    <button type="button" className="btn btn-danger btn-sm p-0" title="Delete"><AiOutlineDelete/></button>
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

export default EFilings;
