import styled from "./HomeTopItem.module.scss";
export default function HomeTopItem({name, info, color}) {
  return (
    <div className={styled.info}>
      <span style={{color:color}}>{name}</span>
      <span>+{info}</span>
    </div>
  );
}
