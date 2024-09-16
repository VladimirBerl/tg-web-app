import styles from "./Roolet.module.scss";
import { useState, useEffect, useRef } from "react";

export const Roolet = () => {
  const [startGame, setStartGame] = useState(false);
  const [generatedItems, setGeneratedItems] = useState([]);
  const [resultItem, setResultItem] = useState(null);
  const list = useRef(null);
  const itemWidth = 100; // Ширина каждого элемента рулетки
  const centerIndex = Math.floor(31 / 2); // Индекс центрального элемента
  const cells = 31; // Количество элементов в рулетке
  const items = [
    { id: 1, value: 10000, chance: 5 },
    { id: 2, value: 5000, chance: 20 },
    { id: 3, value: 1000, chance: 75 },
  ];

  const getItem = () => {
    let selectedItem;
    const random = Math.random() * 100;

    for (let item of items) {
      if (random <= item.chance) {
        selectedItem = item;
        break;
      }
    }

    return selectedItem || items[2];
  };

  useEffect(() => {
    list.current.style.transition = "none";
    list.current.style.transform = `translate3d(0, 0, 0)`;

    const generateItems = () => {
      const generated = [];
      for (let i = 0; i < cells; ++i) {
        const item = getItem();
        generated.push({ ...item, key: `${item.id}-${i}-${Date.now()}` });
      }
      setGeneratedItems(generated);
      setStartGame(false);
    };

    generateItems();
  }, [startGame]);

  const start = () => {
    setStartGame(true);
    setResultItem(null);

    setTimeout(() => {
      if (list.current) {
        list.current.style.transition =
          "5s cubic-bezier(0.21, 0.53, 0.29, 0.99)";

        const targetPosition = -(centerIndex * itemWidth) + itemWidth / 2; // Центрируем элемент
        list.current.style.transform = `translate3d(${targetPosition}px, 0, 0)`;

        list.current.addEventListener("transitionend", () => {
          const targetItem = list.current.querySelectorAll(`.${styles.item}`)[
            centerIndex
          ]; // Центральный элемент списка
          if (targetItem) {
            targetItem.classList.add(styles.active);
            const selectedItemValue = targetItem.innerText.trim();
            console.log(`Выпало: ${selectedItemValue}`);
            setResultItem(selectedItemValue); // Сохраняем результат
          }
        });
      }
    }, 1000);
  };

  return (
    <div className={styles.role}>
      <h3 className={styles.title}>Получить бонус</h3>
      <div className={styles.pointer}>
        <img src="/icon/roolet.svg" alt="" />
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
