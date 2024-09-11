import styles from "./RankImages.module.scss";

const RankImages = ({rank}) => {
  return (
    <div className={styles.rank}>
      <img src={`/rank/${rank}.png`} alt="" />
    </div>
  );
};

export default RankImages;
