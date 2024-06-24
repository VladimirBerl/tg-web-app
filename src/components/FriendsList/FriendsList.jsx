import styled from "./FriendsList.module.scss";

export default function FriendsList() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>
        <span>Списов ваших дузей (1)</span>
        <img src="/ui/convert.svg" alt="convert" />
      </div>
      <div className={styled["friends-list"]}>
        <div className={styled.frinds}>
          <div className={styled.profil}>
            <img src="/ui/profile.svg" alt="profile" />
          </div>
          <div className={styled["user-card"]}>
            <span className={styled["user-name"]}>User 123</span>
            <div>
              <img src="/images/coin.png" alt="coin" />
              <span>+5 000</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styled["invate-block"]}>
        <button className={styled["invate-bnt"]}>
          Пришласить друга
          <img src="/ui/invate-friends.svg" alt="invate-friends" />
        </button>
        <button className={styled["invate-link"]}>
          <img src="/ui/link.svg" alt="invate-friends" />
        </button>
      </div>
    </div>
  );
}
