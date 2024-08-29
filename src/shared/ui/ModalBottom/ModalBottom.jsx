import styled from "./ModalBottom.module.scss";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

const ModalBottom = ({ children, setShowModalBottom, title }) => {
  return createPortal(
    <div className={`${styled.modal} background-br`}>
      <div className={styled.top}>
        {title && <h3>{title}</h3>}
        <img
          onClick={() => setShowModalBottom(false)}
          className={styled.close}
          src="/icon/close-min.svg"
          alt="close"
        />
      </div>
      <div className={styled.children}>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default ModalBottom;
