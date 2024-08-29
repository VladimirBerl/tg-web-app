import styles from "./ProfilInfo.module.scss";
import InfoItems from "./ui/InfoItems/InfoItems";
import Transactions from "./ui/Transactions/Transactions";

const ProfilInfo = () => {
  return (
    <div className={styles.info}>
      <ul>
        <InfoItems />
      </ul>
      <Transactions />
    </div>
  );
};

export default ProfilInfo;
