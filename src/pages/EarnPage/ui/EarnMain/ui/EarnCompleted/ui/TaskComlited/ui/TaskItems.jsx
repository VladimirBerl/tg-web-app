import styles from "./TaskItems.module.scss";
const TaskItems = ({ task }) => {
  return (
    <div key={task.id} className={`${styles.task} background-br`}>
      <img className={styles.telegram} src="/icon/tg-earn.svg" alt="icon" />
      <div className={styles["task-info"]}>
        <span className={styles.desc}>{task.description}</span>
        <div className={styles["price-task"]}>
          <div className={styles["coin-img"]}>
            <img src="/icon/coin-min.png" alt="coin" />
          </div>
          <span>+5000</span>
        </div>
      </div>
      <img
        style={{ width: "28px", height: "28px" }}
        src="/icon/ready.svg"
        alt="ready"
      />
    </div>
  );
};

export default TaskItems;
