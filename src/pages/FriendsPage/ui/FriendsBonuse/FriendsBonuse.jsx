import styled from "./FriendsBonuse.module.scss";
import { useUser } from "@/app/context/UserContext";
import { Button } from "@/shared/ui/Buttom";
const FriendsBonuse = () => {
  const { user } = useUser();
  return (
    <div className={styled.wrapper}>
      <Button
        gradient="true"
        sizeborder="17px"
        sizeIcon="30px"
        sizetext="16.5px"
        maxwidth="100%"
        padding="14px 0px"
        leftItem="/icon/coin-min.png"
      >
        +{user?.count_invited_friends * 5000}
      </Button>
    </div>
  );
};

export default FriendsBonuse;
