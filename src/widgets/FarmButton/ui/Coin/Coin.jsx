import styled from "./Coin.module.scss";
import Info from "../Info/Info";
import { useUser } from "@/app/context/UserContext";
import { useModal } from "@/shared/hooks/modal.js";

const Coin = () => {
  const { isOpen, toggle } = useModal();
  const { user } = useUser();
  return (
    <>
      <div className={styled.count}>
        <img
          src="/icon/coin-min.png"
          alt="coin"
          onClick={() => toggle((prev) => !prev)}
        />
        <span>{user?.count_coins.toLocaleString("de-DE")}</span>
      </div>
      {isOpen && <Info setShowModalBottom={toggle} />}
    </>
  );
};

export default Coin;
