import styled from "./FriendsInvate.module.scss";
import { Button } from "@/shared/ui/Buttom";
import { useUser } from "@/app/context/UserContext";
import { ModalInfo } from "@/shared/ui/ModalInfo";
import { useModal } from "@/shared/hooks/modal.js";
import { useState } from "react";

const FriendsInvate = () => {
  const { user } = useUser();
  const { isOpen, toggle } = useModal();
  const [copyText, setCopyText] = useState("");

  const copyInviteLink = () => {
    const link = `https://t.me/Testapimybot/?start=invited_by_${user.id_telegram}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopyText("Скопировано");
        toggle();
      })
      .catch(() => {
        setCopyText("Ошибка");
        toggle();
      });
  };

  return (
    <div className={styled.link}>
      <Button
        padding=" 8px"
        showborder="true"
        sizeborder="15px"
        sizetext="14.83px"
      >
        +FRIENDS
      </Button>
      <Button
        eventclick={copyInviteLink}
        padding="10px"
        showborder="true"
        sizeborder="15px"
        leftItem="/icon/copy.svg"
        sizeIcon="17px"
      />
      {isOpen && <ModalInfo setShowModalBottom={toggle}>{copyText}</ModalInfo>}
    </div>
  );
};

export default FriendsInvate;
