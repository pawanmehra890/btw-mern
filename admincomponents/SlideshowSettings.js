import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import AddSlides from "./AddSlides";
import EditSlide from "./EditSlide";
import axios from "axios";

function SlideshowSettings() {
  const [addSlides, setAddSlides] = useState(false);
  const closeModal = () => setAddSlides(false);
  const [editSlide, seteditSlide] = useState(false);
  const closeModal2 = () => seteditSlide(false);
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
      });
  }

  const setToLocalStorage = (id, slides, order) => {
    localStorage.setItem("id", id);
    localStorage.setItem("slides", slides);
    localStorage.setItem("order", order);
  };

  useEffect(() => {
    getData();
  }, []);

  // State variable to keep track of slide status
  //  const [data, setData] = useState([]);
  // Fetch the data
  useEffect(() => {
    axios
      .get("https://63ca270ed0ab64be2b4d410c.mockapi.io/Slides/crud")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  // function to update the slide status
  function handleSlideStatus(id, status) {
    axios
      .put(`https://63ca270ed0ab64be2b4d410c.mockapi.io/Slides/crud/${id}`, {
        isActive: status,
      })
      .then(() => {
        getData();
      });
  }
  // render function

  return (
    <>
      <div className="col-12 admin-dash-cont">
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper ">
          <div className="adminSubNav">
            <h3 className="admin-nav-titlee">Slideshow Settings</h3>
          </div>
          <hr />
          <div className="table-section">
            <div className="tablenav">
              <div className="ml-2 mb-2">
                <button
                  type="button"
                  className="btn btn-success"
                  className="modal-btn"
                  onClick={() => setAddSlides(true)}
                >
                  Add Slides
                  <IoAdd />
                </button>
                {addSlides && <AddSlides closeModal={closeModal} />}
              </div>
            </div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Slides</th>
                  <th scope="col">Display order</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {data
                ? data.map((eachData) => {
                    return (
                      <>
                        <tbody>
                          <tr>
                            <th scope="row">{eachData.id}</th>
                            <td>
                              <img src={eachData.imageUrl} alt="slide" />
                            </td>
                            <td>{eachData.order}</td>

                            <td>
                              <div className="form-check form-switch">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={`switch_${eachData.id}`}
                                  checked={eachData.isActive}
                                  onChange={() =>
                                    handleSlideStatus(
                                      eachData.id,
                                      !eachData.isActive
                                    )
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`switch_${eachData.id}`}
                                >
                                  {eachData.isActive ? "Active" : "Inactive"}
                                </label>
                              </div>
                            </td>
                            <td>
                              <div className="buttonsEnq">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm p-0"
                                  title="Edit"
                                  className="modal-btn"
                                  onClick={() => {
                                    setToLocalStorage(
                                      eachData.id,
                                      eachData.slides,
                                      eachData.order
                                    );
                                    seteditSlide(true);
                                  }}
                                >
                                  <AiOutlineEdit />
                                </button>
                                {editSlide && (
                                  <EditSlide closeModal2={closeModal2} />
                                )}
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
                    );
                  })
                : ""}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideshowSettings;
