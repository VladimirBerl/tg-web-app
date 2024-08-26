import styled from "./Farm.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useChangeUserCountMutation } from "@/app/api";
import { useState } from "react";
import { useUser } from "@/app/context/UserContext";

const Farm = () => {
  const { user } = useUser();
  const [btnText, setBtnText] = useState("Start farming");

  const [changeUserCount] = useChangeUserCountMutation();

  const changeToken = async () => {
    try {
      const token = await changeUserCount({
        id: user.id_telegram,
        body: {
          amount: user.count_pharmd,
          add: true,
        },
      }).unwrap();

      console.log("Accepted", token);
    } catch (error) {
      console.error("Failed to update tokens:", error);
    }
  };

  return (
    <button
      onClick={() => changeToken()}
      className={`${styled.farm} background-br`}
    >
      <span>{btnText}</span>
    </button>
  );
};

export default Farm;
