import styles from "./RankTaskListItem.module.scss";
import { useEffect, useState } from "react";
import { useUser } from "@/app/context/UserContext";

const RankTaskListItem = ({ condition }) => {
  const { user } = useUser();
  const [target, setTarget] = useState(null);

  const typeCheck = () => {
    if (condition.type === "coins") {
      setTarget(
        `${String(user.count_coins).slice(0, 2)}к/${String(condition.target).slice(0, 3)}к`
      );
    }
    if (condition.type === "friends") {
      setTarget(`${user.friends.length}/${condition.target}`);
    }
    if (condition.type === "task") {
      setTarget(`${user.tasks.length}/${condition.target}`);
    }
  };

  useEffect(() => {
    typeCheck();
  }, []);

  return (
    <div className={styles.condition}>
      <div className={styles.count}>{condition.id}</div>
      <div className={styles.info}>
        <span className={styles.desc}>{condition.description}</span>
        <span className={styles.target}>{target}</span>
        <img src="/icon/watch-w.svg" alt="watch" />
      </div>
    </div>
  );
};

export default RankTaskListItem;
