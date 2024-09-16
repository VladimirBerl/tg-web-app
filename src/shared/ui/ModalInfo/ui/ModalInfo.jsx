import styles from "./ModalInfo.module.scss";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export const ModalInfo = ({ children, setShowModalBottom }) => {
  const modalRef = useRef();

  const closeModal = () => {
    modalRef.current.style.bottom = "0px";
    setTimeout(() => {
      setShowModalBottom();
    }, 1000);

    return clearTimeout(() => setShowModalBottom(), 1000);
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
    <div ref={modalRef} className={`${styles["modal-info"]} background-br`}>
      {children}
    </div>,
    document.getElementById("portal")
  );
};
