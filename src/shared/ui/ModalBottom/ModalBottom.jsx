import styled from "./ModalBottom.module.scss";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ModalBottom = ({ children, setShowModalBottom, position = null }) => {
  const modalRef = useRef();

  const [topPosition, setTopPosition] = useState(position);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModalBottom(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModalBottom]);

  return createPortal(
    <div
      className={`${styled.modal} background-br`}
      ref={modalRef}
      style={{ bottom: topPosition, transition: "bottom 0.4s" }}
    >
      <img
        onClick={() => setShowModalBottom(false)}
        className={styled.close}
        src="/icon/close-min.svg"
        alt="close"
      />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default ModalBottom;
