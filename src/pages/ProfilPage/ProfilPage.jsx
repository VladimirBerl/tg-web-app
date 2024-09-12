import styles from "./ProfilPage.module.scss";
import CloseBtn from "@/shared/ui/CloseBtn/CloseBtn";
import SwitchingTabs from "./ui/SwitchingTabs/SwitchingTabs";
import RenderTabsItem from "./ui/RenderTabsItem/RenderTabsItem";
import { useState } from "react";

const ProfilPage = () => {
  const [indexTab, setIndexTab] = useState("Профиль");

  const toggleTabs = (tabName) => {
    setIndexTab(tabName);
  };

  return (
    <div className={styles.wrapper}>
      <CloseBtn />
      <SwitchingTabs activeTab={indexTab} toggle={toggleTabs} />
      <RenderTabsItem tab={indexTab} />
    </div>
  );
};

export default ProfilPage;
