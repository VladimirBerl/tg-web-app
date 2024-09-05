import styled from "./Modal.module.scss";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = () => {
    modalRef.current.style.opacity = "0";
    modalRef.current.style.transform = "translate(-50%, -50%) scale(0.8)";
    setTimeout(() => {
      setShowModal();
    }, 300);

    return clearTimeout(() => setShowModal(), 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return createPortal(
    <div className={`${styled.modal} background-br`} ref={modalRef}>
      <img
        onClick={closeModal}
        className={styled.close}
        src="/icon/close-min.svg"
        alt="close"
      />
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
