import styles from "./TaskItem.module.scss";
import { Button } from "@/shared/ui/Buttom";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const [status, setStatus] = useState(false);
  const [buttonText, setButtonText] = useState("Перейти");

  const chekSatusTask = () => {
    setStatus((prev) => !prev);
    setButtonText("Проверить");
  };

  return (
    <div key={task.id} className={`${styles.task} background-br`}>
      <img className={styles.telegram} src={task.icon} alt="icon" />
      <div className={styles["task-info"]}>
        <span>{task.title}</span>
        <div className={styles["price-task"]}>
          <div className={styles["coin-img"]}>
            <img src="/icon/coin-min.png" alt="coin" />
          </div>
          <span>+{task.price}</span>
        </div>
      </div>
      <Button
        padding="8px"
        gradient="true"
        sizetext="12px"
        click={chekSatusTask}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default TaskItem;
