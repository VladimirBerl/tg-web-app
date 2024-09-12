import styles from "./ProfilPage.module.scss";
import CloseBtn from "@/shared/ui/CloseBtn/CloseBtn";
import SwitchingTabs from "./ui/SwitchingTabs/SwitchingTabs";
import RenderTabsItem from "./ui/RenderTabsItem/RenderTabsItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfilPage = () => {
  const [indexTab, setIndexTab] = useState("Профиль");

  const toggleTabs = (tabName) => {
    setIndexTab(tabName);
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <CloseBtn />
      </Link>
      <SwitchingTabs activeTab={indexTab} toggle={toggleTabs} />
      <RenderTabsItem tab={indexTab} />
    </div>
  );
};

export default ProfilPage;
