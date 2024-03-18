import { useState } from 'react';

function useRandomWinners<T>() {
  const [winners, setWinners] = useState<T[]>([]);

  const generateWinners = (items: T[], totalWinners: number) => {
    const result: T[] = [];
    const arrCopy = [...items];

    for (let i = 0; i < Math.min(totalWinners, arrCopy.length); i++) {
      const randomIndex = Math.floor(Math.random() * arrCopy.length);
      result.push(...arrCopy.splice(randomIndex, 1));
    }

    setWinners(result);
  };

  return { winners, generateWinners };
}

export default useRandomWinners;
