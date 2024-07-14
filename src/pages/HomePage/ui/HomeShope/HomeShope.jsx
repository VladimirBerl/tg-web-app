import styled from "./HomeShope.module.scss";
import HomeModalBottom from "../HomeModalBottom/HomeModalBottom";
import { useState } from "react";

const HomeShope = () => {
  const [showModalBottomBuy, setShowModalBottomBuy] = useState(false);
  const [showModalBottomSell, setShowModalBottomSell] = useState(true);

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.button}>
          <span
            onClick={() => {
              setShowModalBottomBuy((prev) => !prev);
            }}
          >
            Купить
          </span>
          <div>
            <img src="/icon/buy.svg" alt="icon" />
          </div>
        </div>
        <div className={styled.button}>
          <span
            onClick={() => {
              setShowModalBottomSell((prev) => !prev);
            }}
          >
            Продать
          </span>
          <div>
            <img src="/icon/sale.svg" alt="icon" />
          </div>
        </div>
      </div>
      {showModalBottomBuy && (
        <HomeModalBottom setShowModalBottom={setShowModalBottomBuy}>
          <div className={styled["wrapper-modal-bottom"]}>
            <h2>Выберите нужное действие</h2>
            <div className={styled["wrapper-heandel"]}>
              <div className={styled.heandel}>
                <span className={styled.level} style={{ color: "#09AD40" }}>
                  1 ур.
                </span>
                <span className={styled.title}>Buyer Marketplace</span>
                <button style={{ marginBottom: "17px" }}>
                  <img src="/public/icon/shop.svg" alt="shop" />
                  <span>
                    Перейти в группу и выбрать нужный товар со скидкой
                  </span>
                </button>
                <button>
                  <img src="/public/icon/search.svg" alt="search" />
                  <span>
                    Перейти в бота и разместить запрос на поиск нужного товара
                  </span>
                </button>
              </div>
            </div>
            <div className={styled["wrapper-heandel"]}>
              <div className={styled.heandel}>
                <span className={styled.level} style={{ color: "#C82B29" }}>
                  2 ур.
                </span>
                <span className={styled.title}>Buyer China Marketplace</span>
                <span className={styled.close}>Закрыт</span>
              </div>
            </div>
            <div className={styled["wrapper-heandel"]}>
              <div className={styled.heandel}>
                <span className={styled.level} style={{ color: "#C82B29" }}>
                  3 ур.
                </span>
                <span className={styled.title}>Buyer Europa Marketplace</span>
                <span className={styled.close}>Закрыт</span>
              </div>
            </div>
            <div className={styled["wrapper-heandel"]}>
              <div className={styled.heandel}>
                <span className={styled.level} style={{ color: "#C82B29" }}>
                  4 ур.
                </span>
                <span className={styled.title}>Buyer Telegram</span>
                <span className={styled.close}>Закрыт</span>
              </div>
            </div>
          </div>
        </HomeModalBottom>
      )}
      {showModalBottomSell && (
        <HomeModalBottom setShowModalBottom={setShowModalBottomSell}>
          <div className={styled["wrapper-modal-bottom"]}>
            <h2>Выберите нужное действие</h2>
            <div className={styled['scroll']}>
              <div className={styled["wrapper-heandel"]}>
                <div className={styled["heandel-two"]}>
                  <span className={styled.level} style={{ color: "#09AD40" }}>
                    1 ур.
                  </span>
                  <span className={styled.title}>Buyer Marketplace</span>
                  <button style={{ marginBottom: "17px" }}>
                    <div>
                      <img src="/icon/coin.svg" alt="coin" />
                      <span>10 000</span>
                    </div>
                    <span>Разместить пост в группе за монеты</span>
                  </button>
                  <button style={{ marginBottom: "17px" }}>
                    <div>
                      <img src="/icon/bmt.png" alt="bmt" />
                      <span>100</span>
                    </div>
                    <span>Разместить пост в группе за токены</span>
                  </button>
                  <button>
                    <div>
                      <img src="/icon/rub.svg" alt="rub" />
                      <span>10 000</span>
                    </div>
                    <span>Разместить пост в группе за рубли</span>
                  </button>
                </div>
              </div>
              <div className={styled["wrapper-heandel"]}>
                <div className={styled.heandel}>
                  <span className={styled.level} style={{ color: "#C82B29" }}>
                    2 ур.
                  </span>
                  <span className={styled.title}>Buyer China Marketplace</span>
                  <span className={styled.close}>Закрыт</span>
                </div>
              </div>
              <div className={styled["wrapper-heandel"]}>
                <div className={styled.heandel}>
                  <span className={styled.level} style={{ color: "#C82B29" }}>
                    3 ур.
                  </span>
                  <span className={styled.title}>Buyer Europa Marketplace</span>
                  <span className={styled.close}>Закрыт</span>
                </div>
              </div>
              <div className={styled["wrapper-heandel"]}>
                <div className={styled.heandel}>
                  <span className={styled.level} style={{ color: "#C82B29" }}>
                    4 ур.
                  </span>
                  <span className={styled.title}>Buyer Telegram</span>
                  <span className={styled.close}>Закрыт</span>
                </div>
              </div>
            </div>
          </div>
        </HomeModalBottom>
      )}
    </>
  );
};

export default HomeShope;
