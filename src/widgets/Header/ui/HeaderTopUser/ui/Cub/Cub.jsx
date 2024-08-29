import { Button } from "@/shared/ui/Buttom";

const Cub = ({ setShowModal }) => {
  return (
    <Button
      click={setShowModal}
      padding="4px"
      showborder="true"
      leftItem="/icon/cup.svg"
    />
  );
};

export default Cub;
