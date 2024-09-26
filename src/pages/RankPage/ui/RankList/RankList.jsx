import styles from "./RankList.module.scss";
import RankItem from "./ui/RankItem/RankItem";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import RankTaskUp from "./ui/RankTaskUp/RankTaskUp";
import { useModal } from "@/shared/hooks/modal.js";

const RankList = ({ ranks, conditions }) => {
  const { isOpen, toggle } = useModal();
  const hendlerTaskModal = () => {
    console.log('asd');
    
    toggle();
  };
  return (
    <>
      <div className={styles.wrapper}>
        {ranks.map((rank) => (
          <RankItem key={rank.id} rank={rank} click={hendlerTaskModal} />
        ))}
      </div>
      {isOpen && (
        <ModalBottom
          title="Открывай уровни получай больше возможностей"
          setShowModalBottom={toggle}
        >
          <RankTaskUp conditions={conditions} />
        </ModalBottom>
      )}
    </>
  );
};

export default RankList;
