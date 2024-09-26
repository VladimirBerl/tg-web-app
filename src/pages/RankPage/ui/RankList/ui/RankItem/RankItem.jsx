import styles from "./RankItem.module.scss";

const RankItem = ({ rank, click }) => {
  return (
    <div className={`${styles.card}`} onClick={() => click()}>
      <img src={`/rank/${rank.rank}.png`} alt="rank" />
      <div className={styles["card-item"]}>
        <span className={styles.rank}>{rank.rank} buyer</span>
        <div className={styles.coins}>
          <img src="/icon/coin-min.png" alt="coins" />
          <span>{rank.required_coins.toLocaleString("de-DE")}</span>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
