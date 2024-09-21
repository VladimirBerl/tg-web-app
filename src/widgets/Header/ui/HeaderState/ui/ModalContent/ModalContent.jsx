import styles from "./ModalContent.module.scss";
const ModalContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["max-participants"]}>
        <h3 >Максимальное количество участников</h3>
        <p>1 000 000 </p>
      </div>
      <div className={styles["max-awards"]}>
        <h3 >Пул наград монет</h3>
        <p >10 000 000 000 </p>
      </div>
      <p className={styles.decs}>
        Прокачивайте свой уровень в приложение, выполняйте простые условия и
        получайте больше наград в монетах
      </p>
    </div>
  );
};

export default ModalContent;
