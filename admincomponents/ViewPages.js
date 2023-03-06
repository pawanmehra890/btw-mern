import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

function ViewPages() {
  const [checked, setChecked] = React.useState(true);
  // onchange for button on off
  const handleChange = () => {
    // setChecked(event.target.checked);
  };
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
              Pages
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>FAQ</td>

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
                      <Link to="/editpages">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                          title="Comment"
                        >
                          <AiOutlineEdit />
                        </button>
                      </Link>
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
                  <td>Career</td>

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
                      <Link to="/editpages">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                          title="Comment"
                        >
                          <AiOutlineEdit />
                        </button>
                      </Link>
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
                  <td>About Us</td>

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
                      <Link to="/editpages">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                          title="Comment"
                        >
                          <AiOutlineEdit />
                        </button>
                      </Link>
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
                  <td>Privacy and Policy</td>

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
                      <Link to="/editpages">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                          title="Comment"
                        >
                          <AiOutlineEdit />
                        </button>
                      </Link>
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
                  <th scope="row">5</th>
                  <td>Terms and Conditions</td>

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
                      <Link to="/editpages">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pt-1 pb-1 pr-3 pl-3 m-1"
                          title="Comment"
                        >
                          <AiOutlineEdit />
                        </button>
                      </Link>
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
      </div>
    </>
  );
}

export default ViewPages;
