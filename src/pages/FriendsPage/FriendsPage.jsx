import styled from "./FriendsPage.module.scss";
import FriendsList from "../../components/FriendsList/FriendsList";
import FriendsListTask from "../../components/FriendsListTask/FriendsListTask";
export default function FriendsPage() {
  return (
    <>
      <div className={styled["wrapper-top"]}>
        <h2 className={styled["wrapper-title"]}>Пригласите друзей!</h2>
        <span className={styled["wrapper-text"]}>
          Вы и ваш друг получит бонусы
        </span>
        <div className={styled.invite}>
          <div className={styled["invite-item"]}>
            <img src="/images/gift-box.svg" alt="gift-box" />
            <div>
              <span className={styled["ivent-title"]}>Пригласить друга</span>
              <div className={styled["ivent-text"]}>
                <div>
                  <img src="/newUI/coin.svg" alt="coin" />
                  <span>+5 000</span>
                </div>
                <span>для вас и вашего друга</span>
              </div>
            </div>
          </div>
          <div className={styled["invite-item"]}>
            <img src="/images/gift-box-two.svg" alt="gift-box" />
            <div>
              <span className={styled["ivent-title"]}>
                Пригласить друга с Telegram Premium
              </span>
              <div className={styled["ivent-text"]}>
                <div>
                  <img src="/newUI/coin.svg" alt="coin" />
                  <span>+25 000</span>
                </div>
                <span>для вас и вашего друга</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FriendsListTask />
      <div className={styled["wrapper-bottom"]}>
        <FriendsList />
      </div>
    </>
  );
}
