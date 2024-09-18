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

  const sendInviteLink = () => {
    const link = `https://t.me/share/url?url=%D0%9F%D1%80%D0%B8%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F%20The%20Buyer:%20https%3A%2F%2Ft.me%2FTestapimybot%2F%3Fstart%3Dinvited_by_$%7Buser.id_telegram%7D`;
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
        eventclick={sendInviteLink}
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
