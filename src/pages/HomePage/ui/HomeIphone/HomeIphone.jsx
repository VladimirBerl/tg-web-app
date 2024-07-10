import styled from "./HomeIphone.module.scss";

import { interactionGroup } from "@/storage/storage";
const HomeIphone = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.buy}>
        <span>{interactionGroup[0].name.toUpperCase()}</span>
        <span>{interactionGroup[0].info}</span>
      </div>
      <div className={styled.sale}>
      <span>{interactionGroup[1].name.toUpperCase()}</span>
      <span>{interactionGroup[1].info}</span>
      </div>
      <img src="/images/iPhone.png" />
    </div>
  );
}

export default HomeIphone
