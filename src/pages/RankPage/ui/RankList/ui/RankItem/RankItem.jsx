import styles from "./RankItem.module.scss";

const RankItem = ({ card, click }) => {
  return (
    <div className={`${styles.card}`} onClick={() => click(card.id)}>
      <img src={`/rank/${card.rank}.png`} alt="rank" />
      <div className={styles["card-item"]}>
        <span className={styles.rank}>{card.rank} buyer</span>
        <div className={styles.coins}>
          <img src="/icon/coin-min.png" alt="coins" />
          <span>{card.coins.toLocaleString("de-DE")}</span>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
