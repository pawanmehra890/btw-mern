import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditSlide({ closeModal2 }) {
const [id, setId] = useState(0);
const [slides, setSlides] = useState("");
const [order, setOrder] = useState("");
const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setSlides(localStorage.getItem("slides"));
    setOrder(localStorage.getItem("order"));
  }, []);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

 const handleUpdate = (e) => {
  e.preventDefault();
  axios.put(`https://63ca270ed0ab64be2b4d410c.mockapi.io/Slides/crud/${id}`,
  {
    slides: slides,
    order: order,
  }
  ).then(() =>{
    navigate("/SlideshowSettings");
  });
  closeModal2();
 };

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal2}></div>
      <div className="modal-container">
        <div className="">
          <div className="m-3">
            <form action="/action_page.php">
              <input
                type="file"
                id="myFile"
                onChange={(e) => setSlides(e.target.value)}
              />
            </form>
          </div>

          <div className="m-3">
            Display Order
            <input
              type="text"
              id="slideindex"
              placeholder="Enter value"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="modal-btn ml-3 mt-1" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default EditSlide;
