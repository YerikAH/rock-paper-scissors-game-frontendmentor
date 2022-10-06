import ReactDOM from "react-dom";
import React from "react";
import imgBonus from "../images/image-rules-bonus.svg";
import iconclose from "../images/icon-close.svg";
import "../modal.css";

const Modal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-center__all">
        <div className="modal-center__all__contain">
          <img src={iconclose} className="bottonForClose" alt="close modal" />
          <div className="modal-center__all_title">
            <h2>RULES</h2>
          </div>
          <div className="modal-center__all_image">
            <img src={imgBonus} alt="" />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};
export default Modal;
