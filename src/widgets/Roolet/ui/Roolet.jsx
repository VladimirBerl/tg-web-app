import styles from "./Roolet.module.scss";
import { useState, useEffect, useRef } from "react";

export const Roolet = () => {
  const [startGame, setStartGame] = useState(false);
  const [generatedItems, setGeneratedItems] = useState([]);
  const list = useRef(null);
  const cells = 31;
  const items = [
    { id: 1, value: 10000, chance: 5 },
    { id: 2, value: 5000, chance: 20 },
    { id: 3, value: 1000, chance: 70 },
  ];

  const getItem = () => {
    let selectedItem;

    while (!selectedItem) {
      const random = Math.floor(Math.random() * 100);

      for (let item of items) {
        if (random <= item.chance) {
          selectedItem = item;
          break;
        }
      }
    }

    return selectedItem;
  };

  useEffect(() => {
    list.current.style.transition = "none";
    list.current.style.left = "0";
    list.current.style.transform = `translate3d(0, 0, 0)`;

    const generateItems = () => {
      const generated = [];
      const counts = {
        1000: 0,
        5000: 0,
        10000: 0,
      };

      for (let i = 0; i < cells; ++i) {
        const item = getItem();
        generated.push({ ...item, key: `${item.id}-${i}-${Date.now()}` });
        counts[item.value] += 1;
      }
      setGeneratedItems(generated);
      console.log("Counts:", counts);
      setStartGame(false);
    };
    generateItems();
  }, [startGame]);

  const start = () => {
    setStartGame(true);

    setTimeout(() => {
      if (list.current) {
        list.current.style.transition =
          "5s cubic-bezier(0.21, 0.53, 0.29, 0.99)";
        list.current.style.left = "50%";
        list.current.style.transform = `translate3d(-50%, 0, 0)`;

        // Добавляем обработчик события transitionend
        list.current.addEventListener("transitionend", () => {
          // Находим 15-й элемент и добавляем ему класс active
          const targetItem = list.current.querySelectorAll(
            `.${styles.item}`
          )[15];
          if (targetItem) {
            targetItem.classList.add(styles.active);
          }
        });
      }
    }, 1000);
  };

  return (
    <div className={styles.role}>
      <h3 className={styles.title}>Получить бонус</h3>
      <div className={styles.pointer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
      <div className={styles.scope}>
        <ul ref={list} className={styles.list}>
          {generatedItems.map((item) => (
            <li className={styles.item} key={item.key}>
              <img
                style={{ width: "24px" }}
                src="/icon/coin-min.png"
                alt="coin"
              />
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={start} className={styles.button}>
        ОТКРЫТЬ
      </button>
    </div>
  );
};
