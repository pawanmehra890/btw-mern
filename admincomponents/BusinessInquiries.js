import React from "react";
import { GoComment } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

function PopupCallInquiries() {
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
              Business Inquiries
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
                  <th scope="col">Location</th>
                  <th scope="col">Requirement Type</th>
                  <th scope="col">Business/Insurance/ISO Type</th>
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
                  <td>Delhi</td>
                  <td>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>17-01-2023</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-success btn-sm p-0"
                        title="Comment"
                      >
                        <GoComment />
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
                <tr>
                  <th scope="row">2</th>
                  <td>Ayush</td>
                  <td>Ays@gmail.com</td>
                  <td>9876543219</td>
                  <td>Delhi</td>
                  <td>Garments</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>15-01-2023</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-success btn-sm p-0"
                        title="Comment"
                      >
                        <GoComment />
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
                <tr>
                  <th scope="row">3</th>
                  <td>XYZ</td>
                  <td>xyz@gmail.com</td>
                  <td>9876543219</td>
                  <td>Delhi</td>
                  <td>Honey</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>14-01-2023</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-success btn-sm p-0"
                        title="Comment"
                      >
                        <GoComment />
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
                <tr>
                  <th scope="row">4</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupCallInquiries;
