import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import ProfilePage from "@/pages/ProfilPage/ProfilPage";
import { useUser } from "@/app/context/UserContext";
import { Button } from "@/shared/ui/Buttom";
import { useModal } from "@/shared/hooks/modal.js";

const User = () => {
  const { user } = useUser();
  const { isOpen, toggle } = useModal();

  return (
    <>
      <Button
        click={toggle}
        showborder="true"
        padding="4px 5px"
        leftItem="/icon/user.svg"
      >
        {user?.user_name.toUpperCase()}
      </Button>
      {isOpen && (
        <ModalBottom setShowModalBottom={toggle}>
          <ProfilePage />
        </ModalBottom>
      )}
    </>
  );
};

export default User;
