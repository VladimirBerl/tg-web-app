import { useState } from "react";
import styled from "./TaskItem.module.scss";

export default function TaskItem({ names, desc, link, icon, price }) {
  const [taskComplited, setTaskComplited] = useState(false)
  return (
    <div className={styled.item} onClick={()=> setTaskComplited(true)}>
      <div className={styled.icon}>
        <img src={icon} alt="profile" />
      </div>
      <div className={styled.info}>
        <div>
          <div className={styled['info-task']}>
            <span className={styled.names}>{names}</span>
            <div className={styled.price}>
              <span>+{price}</span>
              <img src="/images/coin.png" alt="coin" />
            </div>
          </div>
          <a href={link} className={styled.desc}>
            {desc}
          </a>
        </div>
        <div className={styled.complited}>
          <img
            src={taskComplited ? "/ui/complited.svg" : "/ui/go.svg"}
            alt="state"
          />
        </div>
      </div>
    </div>
  );
}
