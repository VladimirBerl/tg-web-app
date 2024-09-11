import styles from "./RankCoinsCount.module.scss";

const RankCoinsCount = ({ coins }) => {
  return (
    <div className={styles.coins}>
      <img src="/icon/coin-min.png" alt="coin" />
      <span>{coins}</span>
    </div>
  );
};

export default RankCoinsCount;
