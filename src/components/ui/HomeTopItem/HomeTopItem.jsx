import styled from "./HomeTopItem.module.scss";
export default function HomeTopItem({name, info, color}) {
  return (
    <div className={styled.info}>
      <span>{name}</span>
      <span style={{color:color}}>+{info}</span>
    </div>
  );
}
