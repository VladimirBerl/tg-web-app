import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "./EarnModal.module.scss";
const EarnModal = ({ children, setShowModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  return createPortal(
    <div className={styled.modal} ref={modalRef}>
      <img
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
        className={styled.close}
        src="/icon/close.svg"
        alt="close"
      />
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default EarnModal;
