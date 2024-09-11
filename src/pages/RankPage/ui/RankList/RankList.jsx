import styles from "./RankList.module.scss";
import RankItem from "./ui/RankItem/RankItem";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import RankTaskUp from "./ui/RankTaskUp/RankTaskUp";
import { useModal } from "@/shared/hooks/modal.js";
import { useState } from "react";

const RankList = ({ cards }) => {
  const [rankIdOpen, setRankIdOpen] = useState(0);
  const { isOpen, toggle } = useModal();
  const hendlerTaskModal = (id) => {
    toggle();
    setRankIdOpen(id - 1);
  };
  return (
    <>
      <div className={styles.wrapper}>
        {cards.map((card) => (
          <RankItem key={card.id} card={card} click={hendlerTaskModal} />
        ))}
      </div>
      {isOpen && (
        <ModalBottom
          title="Открывай уровни получай больше возможностей"
          setShowModalBottom={toggle}
        >
          <RankTaskUp tasks={cards[rankIdOpen]} />
        </ModalBottom>
      )}
    </>
  );
};

export default RankList;
