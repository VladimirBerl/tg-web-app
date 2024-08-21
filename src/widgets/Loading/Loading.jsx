import styled from "./Loading.module.scss";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div className={`${styled.wrapper} background-br`}>
      <span>Loading</span>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
