import { useUpdateUserCoins } from "@/entities/user/api";
import { useState, useEffect, useRef, useCallback } from "react";

// Константы для улучшения читаемости
const TOTAL_CELLS = 31;
const CENTER_INDEX = Math.floor(TOTAL_CELLS / 2);
const TRANSITION_DURATION = 6000;
const INITIAL_TRANSFORM = "-20%";
const FINAL_TRANSFORM = "-50%";

export const useRouletteWrap = (styles, toggle, spinners) => {
  const { updateCoins } = useUpdateUserCoins();
  const [startGame, setStartGame] = useState(false);
  const [generatedElements, setGeneratedElements] = useState([]);
  const sheetElements = useRef(null);
  const [resultItem, setResultItem] = useState(null);

  const possibleWinnings = [
    { id: 1, value: 10000, chance: 5 },
    { id: 2, value: 5000, chance: 20 },
    { id: 3, value: 1000, chance: 75 },
  ];

  // Генерация случайного элемента выигрыша
  const generateRandomWinningItem = () => {
    const random = Math.floor(Math.random() * 100);
    return (
      possibleWinnings.find((item) => random <= item.chance) ||
      possibleWinnings[2]
    );
  };

  // Генерация элементов для рулетки
  const generateRouletteItems = useCallback(() => {
    const items = Array.from({ length: TOTAL_CELLS }, (_, i) => ({
      ...generateRandomWinningItem(),
      key: `${Date.now()}-${i}`,
    }));
    setGeneratedElements(items);
  }, []);

  // Обработка завершения анимации рулетки
  const handleTransitionEnd = useCallback(() => {
    const targetItem = sheetElements.current.querySelectorAll(
      `.${styles.item}`
    )[CENTER_INDEX];
    console.log(targetItem);

    if (targetItem) {
      const selectedItemValue = targetItem.innerText.trim();
      setResultItem(selectedItemValue);
      targetItem.classList.add(styles.active);

      toggle(); // Открытие модального окна
      setStartGame(false); // Остановка игры
      updateCoins(selectedItemValue, "Рулетка");
    }
  }, [toggle, updateCoins]);

  // Запуск игры
  const startRoulette = useCallback(() => {
    if (spinners === 0) {
      return;
    }
    if (!startGame) {
      setStartGame(true);
      setResultItem(null);
      setTimeout(() => {
        if (sheetElements.current) {
          sheetElements.current.style.transition =
            "6s cubic-bezier(0.21, 0.53, 0.29, 0.99)";
          sheetElements.current.style.left = "50%";
          sheetElements.current.style.transform = `translate3d(${FINAL_TRANSFORM}, 0, 0)`;
        }
      }, 1000);
    }
  }, [startGame]);

  useEffect(() => {
    if (!startGame) {
      sheetElements.current.style.transition = "none";
      sheetElements.current.style.transform = `translate3d(${INITIAL_TRANSFORM}, 0, 0)`;
      generateRouletteItems();
    }
  }, [startGame, generateRouletteItems]);

  // Обработка завершения анимации с таймаутом
  useEffect(() => {
    if (startGame && sheetElements.current) {
      const transitionTimeout = setTimeout(
        handleTransitionEnd,
        TRANSITION_DURATION
      );
      return () => clearTimeout(transitionTimeout); // Очистка таймаута при размонтировании
    }
  }, [startGame, handleTransitionEnd]);

  return {
    generatedElements,
    sheetElements,
    startRoulette,
    startGame,
    resultItem,
  };
};
