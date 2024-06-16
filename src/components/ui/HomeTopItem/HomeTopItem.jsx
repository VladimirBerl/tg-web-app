import styled from "./HomeTopItem.module.scss";
export default function HomeTopItem({name, info}) {
  return (
    <div className={styled.info}>
      <span>{name}</span>
      <span>{info}</span>
    </div>
  );
}
