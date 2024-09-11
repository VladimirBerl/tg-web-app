import styles from "./RankLevel.module.scss";

const RankLevel = ({ level, rankName }) => {
  return (
    <div className={styles.name}>
      <span className={styles.level}>{level} lvl</span>
      <span className={styles["rank-name"]}>{rankName} buyer</span>
    </div>
  );
};

export default RankLevel;
