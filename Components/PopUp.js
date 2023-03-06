// import { render } from "@testing-library/react";
import React from "react";
import "../Cssfiles/Popup.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "react-bootstrap";
import "../Cssfiles/Popup.css";

class PopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      timePassed: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 5000);
    if (this.state.timePassed) {
      return (
        <>
          <div>
            <Modal
              className="main-modal"
              show={this.state.show}
              onHide={() => this.handleModal()}
            >
              <ModalHeader closeButton>
                {" "}
                <h2 className="modal-title modal-heading">
                  Tell Us What You Need!
                </h2>
              </ModalHeader>
              <ModalBody>
                {" "}
                <div className="modal-body">
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
                        placeholder="Name"
                        name="user_name"
                        id="user_name"
                        required=""
                      />
                    </div>
                    <div className="form-group col-sm-6 modal-form">
                      <input
                        type="email"
                        className="form-control shadow modal-input"
                        placeholder="Email Address"
                        name="user_email"
                        id="user_email"
                        required=""
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
                        required=""
                      />
                    </div>
                    <div className="form-group col-sm-6 modal-form">
                      <select className="option-choose form-control shadow">
                        <option value="" selected disabled hidden>
                          Choose here
                        </option>
                        <option value="1">Buyer</option>
                        <option value="2">Seller</option>
                      </select>
                    </div>
                    <div className="form-group modal-form-group col-sm-12">
                      <textarea
                        rows="4"
                        className="form-control shadow modal-input"
                        placeholder="Tell Us Your Requirements"
                        name="requirements"
                        id="requirements"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="submit-modal-btn">Submit</Button>
              </ModalFooter>
            </Modal>
          </div>
        </>
      );
    }
  }
}
export default PopUp;
