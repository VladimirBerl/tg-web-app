import styled from "./ModalContent.module.scss";
import Modal from "@/shared/ui/Modal/Modal";

const ModalContent = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <Modal setShowModal={setShowPopup}>
          <div className={styled.modal}>
            <div className={styled["ruler-info"]}>
              <img src="/images/info.png" alt="info" />
              <span className={styled["ruler-desc"]}>
                Чтобы добавить ваше <br /> задание, отправьте запрос в телеграм
              </span>
            </div>
            <button className={`${styled["ruler-btn"]} background-br`}>@Manager_Vip_Client</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalContent;
