import styles from './RankTaskUp.module.scss'
import RankProgressBar from "./ui/RankProgressBar/RankProgressBar";

const RankTaskUp = ({ tasks }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{tasks.rank} byuer {tasks.id}/10</h3>
      <RankProgressBar />
    </div>
  );
};

export default RankTaskUp;
