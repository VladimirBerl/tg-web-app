import { Button } from "@/shared/ui/Buttom";
import HomeTopModal from "../../../HomeTopModal/HomeTopModal";
import { useModal } from "@/shared/hooks/modal.js";

const Cub = () => {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <Button
        click={toggle}
        padding="4px"
        showborder="true"
        leftItem="/icon/cup.svg"
      />
      {isOpen && <HomeTopModal setShowModal={toggle} />}
    </>
  );
};

export default Cub;
