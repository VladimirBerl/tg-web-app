import styles from "./Transaction.module.scss";
import { useUser } from "@/app/context/UserContext";
import { useGetTransactionsQuery } from "@/app/api";

const Transactions = () => {
  const { user } = useUser();

  const { data, error, isLoading } = useGetTransactionsQuery(user.id_telegram);
  console.log(data);
  
  const transactions = data?.transactions || [];

  return (
    <div className={styles.wrapper}>
      <h3>Ваши транзакции</h3>

      {isLoading && <p>Загрузка транзакций...</p>}
      {error && <p>Ошибка загрузки транзакций</p>}

      <div className={styles.transactions}>
        {transactions.length > 0
          ? transactions.map((item) => (
              <div className={styles["transaction-item"]} key={item.id}>
                <div className={styles.info}>
                  <div className={`${styles.icon} background-br`}>
                    <img src="/icon/clipboard-plus.svg" alt="clipboard-plus" />
                  </div>
                  <div className={styles.name}>
                    <span>{item.description}</span>
                    <span>{item.transaction_date}</span>
                  </div>
                </div>
                <div className={styles.amount}>
                  <img src="/icon/coin-min.png" alt="coin" />
                  <span>+{item.change_amount}</span>
                </div>
              </div>
            ))
          : !isLoading && <p>Нет транзакций для отображения</p>}
      </div>
    </div>
  );
};

export default Transactions;
