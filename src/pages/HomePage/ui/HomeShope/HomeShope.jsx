import styled from "./HomeShope.module.scss";
import ModalContainer from "./ui/ModalContainer/ModalContainer";
import { Button } from "@/shared/ui/Buttom";
import { useModal } from "@/shared/hooks/modal.js";

const HomeShope = () => {
  const { isOpen, toggle } = useModal();
  const { isOpen: isOpenTwo, toggle: toggleTwo } = useModal();

  return (
    <>
      <div className={styled.wrapper}>
        <Button
          click={toggle}
          maxwidth="120px"
          rightItem="/icon/buy.svg"
          sizeIcon="14px"
          showborder="true"
        >
          Купить
        </Button>
        <Button
          click={toggleTwo}
          maxwidth="120px"
          rightItem="/icon/sale.svg"
          sizeIcon="14px"
          showborder="true"
        >
          Продать
        </Button>
      </div>
      <ModalContainer
        showModalBottomBuy={isOpen}
        showModalBottomSell={isOpenTwo}
        setShowModalBottomBuy={toggle}
        setShowModalBottomSell={toggleTwo}
      />
    </>
  );
};

export default HomeShope;
