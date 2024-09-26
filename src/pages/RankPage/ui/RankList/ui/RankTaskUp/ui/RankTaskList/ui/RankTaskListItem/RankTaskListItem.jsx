import styles from "./RankTaskListItem.module.scss";
import { useEffect, useState } from "react";
import { useUser } from "@/app/context/UserContext";

const RankTaskListItem = ({ condition, index }) => {
  const { user } = useUser();
  const [target, setTarget] = useState(null);
  const [completed, setCompleted] = useState(false);

  const typeCheck = () => {
    const target = condition.target;
    const friends = user.count_invited_friends;
    const coins = user.count_coins;
    const tasks = user.count_tasks;
    
    switch (condition.type) {
      case "coins":
        if (target <= coins) {
          setCompleted(true);
        }
        setTarget(
          `${String(coins).slice(0, 3)}к/${String(target).slice(0, 3)}к`
        );
        break;
      case "friends":
        if (target <= friends) {
          setCompleted(true);
        }
        setTarget(`${friends}/${target}`);
        break;
      case "tasks":
        if (target <= tasks) {
          setCompleted(true);
        }
        setTarget(`${tasks}/${target}`);
        break;
    }
  };

  useEffect(() => {
    typeCheck();
  }, []);

  return (
    <div className={styles.condition}>
      <div className={styles.count}>{index + 1}</div>
      <div className={styles.info}>
        <span className={styles.desc}>{condition.description}</span>
        <span className={styles.target}>{target}</span>
        <img src={`/icon/${completed ? "ready" : "watch-w"}.svg`} alt="watch" />
      </div>
    </div>
  );
};

export default RankTaskListItem;
