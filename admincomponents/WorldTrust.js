import React from 'react'

const WorldTrust = () => {
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
         World Trust Certificate
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
                <th scope="col">Company Name</th>
                <th scope="col">IEC</th>
                <th scope="col">GST No.</th>
                <th scope="col">Address</th>
                <th scope="col">Purpose of Export</th>
                <th scope="col">Port of Loading</th>
                <th scope="col">Port of Discharge</th>
                <th scope="col">Country of export</th>
                <th scope="col">Foregin buyer Name</th>
                <th scope="col">FB Address</th>
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
                <td>Delhi</td>
                <td>Delhi</td>
                <td>Delhi</td>
                <td>Contact Us</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>17-01-2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
}

export default WorldTrust