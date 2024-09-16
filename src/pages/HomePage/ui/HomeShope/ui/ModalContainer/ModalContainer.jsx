import styled from "./ModalContainer.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const ModalContainer = ({
  showModalBottomBuy,
  showModalBottomSell,
  setShowModalBottomBuy,
  setShowModalBottomSell,
}) => {
  const openLinkTg = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.openLink("https://t.me/Buyer_Marketplace");
    } else {
      console.error("Telegram WebApp is not defined");
    }
  };

  return (
    <>
      {showModalBottomBuy && (
        <ModalBottom
          position="-138px"
          title="Выберите нужное действие"
          setShowModalBottom={setShowModalBottomBuy}
        >
          <div className={styled["wrapper-modal-bottom"]}>
            <div className={styled["scroll"]}>
              <div className={styled.heandel}>
                <span className={styled.level} style={{ color: "#09AD40" }}>
                  1 ур.
                </span>
                <span className={styled.title}>Buyer Marketplace</span>
                <button
                  onClick={handlerVibrationTg}
                  style={{ marginBottom: "17px" }}
                >
                  <img src="/icon/shop.svg" alt="shop" />
                  <span onClick={openLinkTg}>
                    Перейти в группу и выбрать нужный товар со скидкой
                  </span>
                </button>
                <button onClick={handlerVibrationTg}>
                  <img src="/icon/search.svg" alt="search" />
                  <span onClick={() => PuzzleBot.sendCommand("/search")}>
                    Перейти в бота и разместить запрос на поиск нужного товара
                  </span>
                </button>
              </div>
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
          <div className={styled["wrapper-modal-bottom"]}>
            <div className={styled["scroll"]}>
              <div className={styled["heandel-two"]}>
                <span className={styled.level} style={{ color: "#09AD40" }}>
                  1 ур.
                </span>
                <span className={styled.title}>Buyer Marketplace</span>
                <button
                  style={{ marginBottom: "17px" }}
                >
                  <div>
                    <img src="/icon/coin-min.png" alt="coin" />
                    <span>10 000</span>
                  </div>
                  <span>Разместить пост в группе за монеты</span>
                </button>
                <button
                  style={{ marginBottom: "17px" }}
                >
                  <div>
                    <img src="/icon/bmt-min.png" alt="bmt" />
                    <span>100</span>
                  </div>
                  <span>Разместить пост в группе за токены</span>
                </button>
                <button
                >
                  <div>
                    <img src="/icon/rub-min.png" alt="rub" />
                    <span>1 000</span>
                  </div>
                  <span>Разместить пост в группе за рубли</span>
                </button>
              </div>
            </div>
          </div>
        </ModalBottom>
      )}
    </>
  );
};

export default ModalContainer;
