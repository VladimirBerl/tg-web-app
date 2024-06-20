import { useState, useEffect } from 'react';

function calculateTimeDifference(startDate, endDate) {
  const diffInMs = endDate - startDate; // разница в миллисекундах

  const diffInSeconds = Math.floor(diffInMs / 1000); // разница в секундах
  const diffInMinutes = Math.floor(diffInSeconds / 60); // разница в минутах
  const diffInHours = Math.floor(diffInMinutes / 60); // разница в часах
  const diffInDays = Math.floor(diffInHours / 24); // разница в днях

  return {
    days: diffInDays,
    hours: diffInHours % 24,
    minutes: diffInMinutes % 60,
    seconds: diffInSeconds % 60,
  };
}

export default function CountData({ finishTime }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeDifference = calculateTimeDifference(date, new Date(finishTime));

  function dataFormat(date) {
    return [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ].join(" ");
  }

  return (
    <span>{timeDifference.seconds}</span>
  );
}
