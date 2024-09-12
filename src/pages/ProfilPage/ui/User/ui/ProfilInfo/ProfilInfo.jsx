import styles from "./ProfilInfo.module.scss";
import InfoItems from "./ui/InfoItems/InfoItems";

const ProfilInfo = () => {
  return (
    <ul className={styles.info}>
      <InfoItems />
    </ul>
  );
};

export default ProfilInfo;
