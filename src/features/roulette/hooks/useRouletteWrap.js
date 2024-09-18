import { useUpdateUserCoins } from "@/entities/user/api.js";
import { useState, useEffect, useRef } from "react";

export const useRouletteWrap = (styles, toggle) => {
  const { updateCoins } = useUpdateUserCoins();

  const [startGame, setStartGame] = useState(false);
  const [generatedElements, setGeneratedElements] = useState([]);
  const sheetElements = useRef(null);

  const cells = 31;
  const centerIndex = Math.floor(31 / 2);
  const [resultItem, setResultItem] = useState(null);

  const possibleWinnings = [
    { id: 1, value: 10000, chance: 5 },
    { id: 2, value: 5000, chance: 20 },
    { id: 3, value: 1000, chance: 75 },
  ];

  const getItem = () => {
    let selectedItem;
    const random = Math.floor(Math.random() * 100);
    for (let item of possibleWinnings) {
      if (random <= item.chance) {
        selectedItem = item;
        break;
      }
    }
    return selectedItem || possibleWinnings[2];
  };

  const generateItems = () => {
    const generated = [];
    for (let i = 0; i < cells; ++i) {
      const item = getItem();
      generated.push({ ...item, key: `${item.id}-${i}-${Date.now()}` });
    }
    setGeneratedElements(generated);
  };

  // Выпадение приза
  const handleTransitionEnd = () => {
    const targetItem = sheetElements.current.querySelectorAll(
      `.${styles.item}`
    )[centerIndex];
    if (targetItem) {
      targetItem.classList.add(styles.active);
      const selectedItemValue = targetItem.innerText.trim();
      setResultItem(selectedItemValue);
      toggle();
      setStartGame(false);
      updateCoins(selectedItemValue);
    }
  };

  useEffect(() => {
    sheetElements.current.style.transition = "none";
    sheetElements.current.style.transform = `translate3d(-20%, 0, 0)`;
    generateItems();

    if (sheetElements.current) {
      sheetElements.current.addEventListener(
        "transitionend",
        handleTransitionEnd
      );
    }

    return () => {
      if (sheetElements.current) {
        sheetElements.current.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [startGame]);

  const startRoulette = () => {
    if (!startGame) {
      setStartGame(true);
      setResultItem(null);

      setTimeout(() => {
        if (sheetElements.current) {
          sheetElements.current.style.transition =
            "5s cubic-bezier(0.21, 0.53, 0.29, 0.99)";
          sheetElements.current.style.left = "50%";
          sheetElements.current.style.transform = `translate3d(-50%, 0, 0)`;
        }
      }, 1000);
    }
  };

  return {
    generatedElements,
    sheetElements,
    startRoulette,
    startGame,
    resultItem,
  };
};
