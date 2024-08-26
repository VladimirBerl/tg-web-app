import styles from "./User.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import ProfilePage from "@/pages/ProfilPage/ProfilPage";
import { useUser } from "@/app/context/UserContext";
import { useState } from "react";

const User = () => {
  const [modal, setModal] = useState(false);
  const { user } = useUser();
  const toggleModal = () => {
    setModal((prev) => !prev);
    handlerVibrationTg();
  };
  return (
    <>
      <div className={`${styles.user} background-br`} onClick={toggleModal}>
        <img src="/icon/user.svg" alt="user" />
        <span>{user?.user_name}</span>
      </div>
      {modal && (
        <ModalBottom position="41px" setShowModalBottom={setModal}>
          <ProfilePage />
        </ModalBottom>
      )}
    </>
  );
};

export default User;
