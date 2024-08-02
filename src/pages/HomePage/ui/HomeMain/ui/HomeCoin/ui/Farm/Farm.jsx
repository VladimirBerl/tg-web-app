import styled from "./Farm.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";

const Farm = () => {
  const [btnText, setBthTex] = useState("Start farming");

  return (
    <button onClick={handlerVibrationTg} className={`${styled.farm} background-br`}>
      <span>{btnText}</span>
    </button>
  );
};

export default Farm;
