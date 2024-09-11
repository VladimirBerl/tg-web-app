import styles from "./CloseBtn.module.scss";

const CloseBtn = ({ close }) => {
  return (
    <img
      onClick={close}
      className={styles.close}
      src="/icon/close-min.svg"
      alt="close"
    />
  );
};

export default CloseBtn;
