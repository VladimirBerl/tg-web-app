import styled from "./FriendsInvate.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { Button } from "@/shared/ui/Buttom";
const FriendsInvate = () => {
  return (
    <div className={styled.link}>
      <Button
        padding=" 8px"
        showborder="true"
        sizeborder="15px"
        sizetext="14.83px"
      >
        +FRIENDS
      </Button>
      <Button
        padding="10px"
        showborder="true"
        sizeborder="15px"
        leftItem="/icon/copy.svg"
        sizeIcon="17px"
      />
    </div>
  );
};

export default FriendsInvate;
