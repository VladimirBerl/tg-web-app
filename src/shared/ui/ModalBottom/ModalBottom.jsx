import styled from "./ModalBottom.module.scss";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import CloseBtn from "../CloseBtn/CloseBtn";

const ModalBottom = ({ children, setShowModalBottom, title, position }) => {
  const modalRef = useRef();

  const closeModal = () => {
    modalRef.current.style.bottom = "-100%";
    setTimeout(() => {
      setShowModalBottom();
    }, 400);

    return clearTimeout(() => setShowModalBottom(), 400);
  };

  useEffect(() => {
    modalRef.current.style.bottom = position ? position : "0";
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
    <div ref={modalRef} className={`${styled.modal} background-br`}>
      <div className={styled.top}>
        {title && <h3>{title}</h3>}
        <CloseBtn close={closeModal} />
      </div>
      <div className={styled.children}>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default ModalBottom;
