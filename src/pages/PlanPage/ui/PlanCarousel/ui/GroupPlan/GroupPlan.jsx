import styles from "./GroupPlan.module.scss";
import GroupIcon from "../GroupIcon/GroupIcon";

export const GroupPlan = ({ slide, type, decs }) => {
  return (
    <div className={styles["swaiper-items"]}>
      <div className={`${styles["swaiper-item"]} background-br`}>
        <h3 className={styles.title}>{decs}</h3>
        {type === "text" ? (
          <div className={styles.progress}>
            <div className={styles.presently}>
              <span>Сейчас</span>
              <div>
                <img src="icon/develop.png" alt="check-mark" />
                <span>{slide.presently}</span>
              </div>
            </div>
            <div className={styles.row}>
              <span style={{ color:slide.color }}>{slide.percent}</span>
              <img src="plan/row.svg" alt="row" />
            </div>
            <div className={styles.destination}>
              <span>Цель</span>
              <div>
                <img src="icon/check-mark.png" alt="check-mark" />
                <span>{slide.destination}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.icon}>
            {slide.icon.map((icon) => (
              <img src={icon} alt="" />
            ))}
          </div>
        )}
        <GroupIcon />
      </div>
    </div>
  );
};
