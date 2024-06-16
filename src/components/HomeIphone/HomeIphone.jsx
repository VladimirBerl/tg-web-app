import styled from "./HomeIphone.module.scss";

import { interactionGroup } from "../../storage/storage";
export default function HomeIphone() {
  return (
    <div className={styled.wrapper}>
      <div>
        <span>{interactionGroup[0].name}</span>
        <span>{interactionGroup[0].info}</span>
      </div>
      <div>
      <span>{interactionGroup[1].name}</span>
      <span>{interactionGroup[1].info}</span>
      </div>
      <img class="group_iphone" src="//i.imgur.com/H02PRON.png" />
    </div>
  );
}
