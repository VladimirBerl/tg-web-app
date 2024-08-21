import styles from "./Cub.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const Cub = ({setShowModal}) => {
  return (
    <div
      className={`${styles.cub} background-br`}
      onClick={() => {
        handlerVibrationTg();
        setShowModal((prev) => !prev);
      }}
    >
      <img src="/icon/cup.svg" alt="user" />
    </div>
  );
};

export default Cub;
