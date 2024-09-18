import styles from "./Roulette.module.scss";
import { useRouletteWrap } from "@/features/roulette/hooks/useRouletteWrap.js";
import { useUser } from "@/app/context/UserContext";
import { Button } from "@/shared/ui/Buttom";
import { ModalInfo } from "@/shared/ui/ModalInfo";
import { useModal } from "@/shared/hooks/modal.js";
import { useEffect, useState } from "react";

export const Roulette = () => {
  const [statusBtn, setStatusBtn] = useState("");
  const { isOpen, toggle } = useModal();
  const { user } = useUser();

  const {
    generatedElements,
    startRoulette,
    sheetElements,
    startGame,
    resultItem,
  } = useRouletteWrap(styles, toggle);

  function chekValidPlayGame() {
    if (user.spinners === 1) {
      setStatusBtn("Нет спинов");
    } else if (startGame) {
      setStatusBtn("Идет прокрутка...");
    } else {
      setStatusBtn("Крутить");
    }
  }
  useEffect(() => {
    chekValidPlayGame();
  }, [startGame]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.decs}>
        <h3 className={styles.title}>Получить бонус</h3>
        <span>Доступные крутки: {user.spinners}</span>
      </div>
      <div className={styles.role}>
        <div className={styles.pointer}>
          <img src="/icon/roolet.svg" alt="" />
        </div>
        <div className={styles.scope}>
          <ul ref={sheetElements} className={styles.list}>
            {generatedElements.map((item) => (
              <li className={styles.item} key={item.key}>
                <img
                  style={{ width: "24px" }}
                  src="/icon/coin-min.png"
                  alt="coin"
                />
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        sizetext="13px"
        disabled={startGame}
        padding="12px 25px"
        eventclick={startRoulette}
      >
        {statusBtn}
      </Button>
      {isOpen && resultItem !== "" && (
        <ModalInfo setShowModalBottom={toggle}>
          Вам выпало: {resultItem}
        </ModalInfo>
      )}
    </div>
  );
};
