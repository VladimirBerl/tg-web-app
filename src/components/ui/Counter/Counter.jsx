import { useState, useEffect } from "react";
export default function Counter({ val, time = 500}) {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    if (currVal !== val) {
      const increment = Math.ceil((val - currVal) / (time / 50));
      const timeout = setTimeout(() => setCurrVal(prev => Math.min(prev + increment, val)), 50);
      return () => clearTimeout(timeout);
    }
  }, [currVal, val, time]);

  return <span>{currVal}</span>;
}
