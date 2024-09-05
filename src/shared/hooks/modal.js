import { useState } from "react";

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return { isOpen, toggle };
};
