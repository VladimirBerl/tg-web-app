import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import ProfilePage from "@/pages/ProfilPage/ProfilPage";
import { useUser } from "@/app/context/UserContext";
import { useState } from "react";
import { Button } from "@/shared/ui/Buttom";

const User = () => {
  const [modal, setModal] = useState(false);
  const { user } = useUser();

  return (
    <>
      <Button
        click={setModal}
        showborder="true"
        padding="4px 5px"
        leftItem="/icon/user.svg"
      >
        {user?.user_name.toUpperCase()}
      </Button>
      {modal && (
        <ModalBottom setShowModalBottom={setModal}>
          <ProfilePage />
        </ModalBottom>
      )}
    </>
  );
};

export default User;
