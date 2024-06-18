import { useState, useEffect } from "react";
export default function Counter({ val, time = 1000 }) {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    if(+currVal === +val) {
      return 
    } else {
      setTimeout(setCurrVal(e => e + 1), time)
    }
  }, [currVal]);

  return <span>{currVal}</span>;
}
