import React, { useState, useEffect } from "react";
import { GoComment } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

function PopupCallInquiries() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://63ca270ed0ab64be2b4d410c.mockapi.io/Slides/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handelDelete(id) {
    axios
      .delete(`https://63ca270ed0ab64be2b4d410c.mockapi.io/Slides/crud/${id}`)
      .then(() => {
        getData();  
  }
)};
      
useEffect(() => {
  getData();
}, []);

  const setToLocalStorage = (id, name, email,mobile,User,requirement,source,date) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("User", User);
    localStorage.setItem("requirement", requirement);
    localStorage.setItem("source", source);
    localStorage.setItem("date", date);
  };

  return (
    <>
      <div className="col-12 admin-dash-cont">
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper ">
          <div className="adminSubNav">
            <h3 className="admin-nav-titlee">PopUp and Call Inquiries</h3>
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
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">User Type</th>
                  <th scope="col">Requirement</th>
                  <th scope="col">Form Source</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Date/Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {
                data.map((eachData) =>
                {
                  return(
                    <>
                <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.mobile}</td>
                  <td>{eachData.User}</td>
                  <td>
                  {eachData.requirement}
                  </td>
                  <td>{eachData.source}</td>
                  <td>
{/* aman */}
                  </td>
                  <td>{eachData.date}</td>
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
                        onClick={() => handelDelete(eachData.id)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
              </>
                  )
              })
              }
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupCallInquiries;
