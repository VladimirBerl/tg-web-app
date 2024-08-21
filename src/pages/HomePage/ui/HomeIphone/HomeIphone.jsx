import styled from "./HomeIphone.module.scss";
const interactionGroup = [
  { name: "Покупатели", info: "574" },
  { name: "Продавцы", info: "234" },
];
const HomeIphone = () => {
  const openLinkTg = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.openLink("https://t.me/Buyer_Marketplace");
    } else {
      console.error("Telegram WebApp is not defined");
    }
  };

  return (
    <div className={styled.wrapper}>
      <div className={styled.buy}>
        <span>{interactionGroup[0].name.toUpperCase()}</span>
        <span>{interactionGroup[0].info}</span>
      </div>
      <div className={styled.sale}>
        <span>{interactionGroup[1].name.toUpperCase()}</span>
        <span>{interactionGroup[1].info}</span>
      </div>
      <img onClick={openLinkTg} src="/images/iPhone.png" alt="iPhone" />
    </div>
  );
};

export default HomeIphone;
