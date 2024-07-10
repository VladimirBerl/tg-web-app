import styled from "./FriendsPage.module.scss";

export default function FriendsPage() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.top}>
        <div className={styled["friends-img"]}>
          <img src="/images/friends.png" alt="friends" />
        </div>
        <h2>0 Друзей</h2>
      </div>

      <button className={styled["btn-friends"]}>
        <div className={styled["coin-img"]}>
          <img src="/icon/coin.svg" alt="coin" />
        </div>
        <span>+50 000</span>
      </button>

      <div className={styled["invite-friends"]}>
        <span className={styled.title}>
          Приглашайте друзей для получения бонусов
        </span>
        <div className={styled["invite-wrapper"]}>
          <div className={styled.gift}>
            <div className={styled["gift-box"]}>
              <div className={styled["gift-img"]}>
                <img src="/icon/gift-box.svg" alt="gift-box" />
              </div>
              <span className={styled.task}>Telegram User</span>
              <div className={styled["price-task"]}>
                <div className={styled["coin-img"]}>
                  <img src="/icon/coin.svg" alt="coin" />
                </div>
                <span>+5 000</span>
              </div>
            </div>
            <div className={styled["gift-box"]}>
              <div className={styled["gift-img"]}>
                <img
                  src="/icon/gift-box-two.svg"
                  alt="gift-box"
                />
              </div>
              <span className={styled.task}>Telegram User</span>
              <div className={styled["price-task"]}>
                <div className={styled["coin-img"]}>
                  <img src="/icon/coin.svg" alt="coin" />
                </div>
                <span>+5 000</span>
              </div>
            </div>
          </div>
          <span>Для вас и вашего друга</span>
        </div>
      </div>

      <div className={styled.link}>
        <button>+FRIENDS</button>
        <button>
          <img src="/icon/copy.svg" alt="cup" />
        </button>
      </div>
    </div>
  );
}
