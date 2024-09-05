import styled from "./HeaderTopUser.module.scss";

import User from "./ui/User/User";
import Cub from "./ui/Cub/Cub";
import Progress from "./ui/Progress/Progress";
const HomeTopUser = () => {
  return (
    <>
      <div>
        <div className={styled["user-info"]}>
          <User />
          <Cub />
        </div>
        <Progress />
      </div>
    </>
  );
};

export default HomeTopUser;
