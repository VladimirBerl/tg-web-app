import styled from "./HomeTopModalChildren.module.scss";
import { useState } from "react";
import {Roolet} from "@/widgets/Roolet";

const HomeTopModalChildren = ({ items }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemTogle, setSelectedItemTogle] = useState(true);

  const handleClick = (id) => {
    if (id === 1) setSelectedItemId(id);
  };

  return items.map((item) => (
    <div key={item.id} className={styled["task-wrapper"]}>
      {selectedItemId === item.id ? (
        <div className={styled.task}>
          <span style={{ color: item.id === 1 ? "#09AD40" : "#C82B29" }}>
            {item.id}
          </span>
          <span className={styled["title-task"]}>{item.title}</span>
          <div className={styled.buttons}>
            <button onClick={() => setSelectedItemTogle(true)}>Условия</button>
            <button onClick={() => setSelectedItemTogle(false)}>
              Возможности
            </button>
          </div>
          <div className={styled["task-variation"]}>
            {selectedItemTogle ? (
              item.conditions.map((task) => (
                <div key={task} className={styled["task-variation-item"]}>
                  <div className={styled.id}>{task.id}</div>
                  <div className={styled.item}>
                    <span>{task.title}</span>
                    <div>
                      <span className={styled.target}>0/{task.target}</span>
                      <img src="/icon/watch.svg" alt="watch" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // : item.possibilities.map((task) => (
              //     <div key={task} className={styled["task-variation-item"]}>
              //       <div className={styled.id}>{task.id}</div>
              //       <div className={styled.item}>
              //         <span>{task.title}</span>
              //         <img src="/icon/watch.svg" alt="watch" />
              //       </div>
              //     </div>
              <Roolet />
            )}
          </div>
        </div>
      ) : (
        <div className={styled.task} onClick={() => handleClick(item.id)}>
          <span style={{ color: item.id === 1 ? "#09AD40" : "#C82B29" }}>
            {item.id}
          </span>
          <img className={styled.img} src={item.icon} alt="icon" />
          <span className={styled["title-task"]}>{item.title}</span>
        </div>
      )}
    </div>
  ));
};

export default HomeTopModalChildren;
