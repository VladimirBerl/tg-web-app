import styles from "./ProfilInfo.module.scss";
import InfoItems from "./ui/InfoItems/InfoItems";

const ProfilInfo = () => {
  return (
    <div className={styles.info}>
      <ul>
        <InfoItems />
      </ul>
    </div>
  );
};

export default ProfilInfo;
