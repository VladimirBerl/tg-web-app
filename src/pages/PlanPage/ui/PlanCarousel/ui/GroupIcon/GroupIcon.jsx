import styled from "./GroupIcon.module.scss";

const groupIcon = [
  {
    name: "question",
    icon: "/icon/question.svg",
  },
  {
    name: "watch",
    icon: "/icon/watch-w.svg",
  },
  {
    name: "email",
    icon: "/icon/email.svg",
  },
  {
    name: "telegram",
    icon: "/icon/tg-w.svg",
  },
];
const GroupIcon = ({ OpenModalContent, id }) => {
  return (
    <div className={styled.group}>
      {groupIcon.map((icon) => (
        <button key={icon.name} className="background-br" onClick={() => OpenModalContent(id)}>
          <img src={icon.icon} alt="question" />
        </button>
      ))}
    </div>
  );
};

export default GroupIcon;
