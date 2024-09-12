import styles from "./SwitchingTabs.module.scss";
import { Button } from "@/shared/ui/Buttom";

const tabs = ["Профиль", "Рулетка", "Транзакции"];

const SwitchingTabs = ({ activeTab, toggle }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          click={() => toggle(tab)}
          maxwidth="100%"
          disabled={activeTab === tab}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default SwitchingTabs;
