import styled from "./ModalContainer.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import ButtinShop from "../ButtonShop/ButtonShop";

const buy = [
  {
    type: "link",
    url: "https://t.me/Buyer_Marketplace",
    icon: "/icon/shop.svg",
    decs: "Перейти в группу и выбрать нужный товар со скидкой",
  },
  {
    type: "bot",
    url: "/start",
    icon: "/icon/search.svg",
    decs: "Перейти в бота и разместить запрос на поиск нужного товара",
  },
];

const sell = [
  {
    type: "bot",
    url: "/start",
    icon: "/icon/coin-min.png",
    decs: "Разместить пост в группе за монеты",
    price: "10 000",
  },
  {
    type: "bot",
    url: "/start",
    icon: "/icon/rub-min.png",
    decs: "Разместить пост в группе за рубли",
    price: "1 000",
  },
];

const ModalContainer = ({
  showModalBottomBuy,
  showModalBottomSell,
  setShowModalBottomBuy,
  setShowModalBottomSell,
}) => {
  return (
    <>
      {showModalBottomBuy && (
        <ModalBottom
          position="-138px"
          title="Выберите нужное действие"
          setShowModalBottom={setShowModalBottomBuy}
        >
          <div className={styled.wrapper}>
            <span className={styled.title}>Buyer Marketplace</span>
            <div className={styled.item}>
              {buy.map((item, index) => (
                <ButtinShop
                  key={index}
                  url={item.url}
                  icon={item.icon}
                  decs={item.decs}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        </ModalBottom>
      )}
      {showModalBottomSell && (
        <ModalBottom
          position="-138px"
          title="Выберите нужное действие"
          setShowModalBottom={setShowModalBottomSell}
        >
          <div className={styled.wrapper}>
            <span className={styled.title}>Buyer Marketplace</span>
            <div className={styled.item}>
              {sell.map((item, index) => (
                <ButtinShop
                  key={index}
                  url={item.url}
                  price={item.price}
                  icon={item.icon}
                  decs={item.decs}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        </ModalBottom>
      )}
    </>
  );
};

export default ModalContainer;
