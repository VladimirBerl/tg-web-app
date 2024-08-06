import styled from "./Loading.module.scss";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div className={styled.wrapper}>
      {/* <Spin size="large" /> */}
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
