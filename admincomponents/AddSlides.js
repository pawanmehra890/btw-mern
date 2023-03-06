import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddSlides({ closeModal }) {

  const [image, setImage] = useState(null);
  const [slides, setslides] = useState("");
  const [order, setorder] = useState("");
  const history = useNavigate();
  // const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("slides", slides);
    formData.append("order", order);
    formData.append("image", image);
    axios.post("https://63ca270ed0ab64be2b4d410c.mockapi.io/Slides/crud", formData)
    .then(res => {
        console.log(res.data)
        history("/SlideshowSettings");
    });
    closeModal();
};

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="">
          <div className="m-3">
            <form action="/action_page.php">
            <input type="file" id="myFile" name="" onChange={(e) => setImage(e.target.files[0])} />
            </form>
          </div>

          <div className="m-3">
            Display Order
            <input type="number" placeholder="Enter order" value={order} onChange={(e) => setorder(e.target.value)} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="modal-btn ml-3 mt-1" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AddSlides;
