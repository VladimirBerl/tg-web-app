import styled from "./ModalContainer.module.scss";
import Modal from "@/shared/ui/Modal/Modal";

const ModalContainer = ({
  showModal,
  setShowModal,
  showModalRub,
  setShowModalRub,
}) => {
  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <div className={styled.modal}>
            <div className={styled["ruler-info"]}>
              <img src="/images/info.png" alt="info" />
              <span className={styled["ruler-title"]}>30%</span>
              <span className={styled["ruler-desc"]}>
                полученной суммы пойдут для выкупа и сжигания монеты
              </span>
            </div>
            <div>
              <div className={styled.ruler}>
                <div className={styled["ruler-wrapper"]}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div
                    style={{ left: "73px" }}
                    className={styled["target-line"]}
                  ></div>
                </div>
                <div className={styled["ruler-procent"]}>
                  <span style={{ color: "#03CFA4" }}>0%</span>
                  <span>10%</span>
                  <span>20%</span>
                  <span
                    style={{
                      color: "#FF5A30",
                      transform: "translateY(10px)",
                      fontSize: "10px",
                    }}
                  >
                    30%
                  </span>
                  <span>40%</span>
                  <span>50%</span>
                  <span>60%</span>
                  <span>70%</span>
                  <span>80%</span>
                  <span>90%</span>
                  <span style={{ color: "#03CFA4" }}>100%</span>
                </div>
              </div>
              <span className={styled.doc}>
                % определяется с помощью голосования
              </span>
              <span className={styled.level}>level 95</span>
            </div>
          </div>
        </Modal>
      )}
      {showModalRub && (
        <Modal setShowModal={setShowModalRub}>
          <div className={styled.modal}>
            <div className={styled["ruler-info"]}>
              <img src="/images/info.png" alt="info" />
              <span className={styled["ruler-title"]}>50%</span>
              <span className={styled["ruler-desc"]}>
                полученной суммы пойдут для выкупа и сжигания токена BMT
              </span>
            </div>
            <div>
              <div className={styled.ruler}>
                <div className={styled["ruler-wrapper"]}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div
                    className={styled["target-line"]}
                    style={{ left: "129px" }}
                  ></div>
                </div>
                <div className={styled["ruler-procent"]}>
                  <span style={{ color: "#03CFA4" }}>0%</span>
                  <span>10%</span>
                  <span>20%</span>
                  <span>30%</span>
                  <span>40%</span>
                  <span
                    style={{
                      color: "#FF5A30",
                      transform: "translateY(10px)",
                      fontSize: "10px",
                    }}
                  >
                    50%
                  </span>
                  <span>60%</span>
                  <span>70%</span>
                  <span>80%</span>
                  <span>90%</span>
                  <span style={{ color: "#03CFA4" }}>100%</span>
                </div>
              </div>
              <span className={styled.doc}>
                % определяется с помощью голосования
              </span>
              <span className={styled.level}>level 95</span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
