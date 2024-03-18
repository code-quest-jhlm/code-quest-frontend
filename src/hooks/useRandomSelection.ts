/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';

function useRandomSelection<T>(
  items: T[], totalItems: number, delay: number = 1000
): [T[], boolean, string] {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    setErrorMessage('');

    if (items.length < totalItems) {
      setErrorMessage('No se puede iniciar el sorteo, dado que la base no es la requerida.');
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      const selection = getRandomSelection(items, totalItems);
      setSelectedItems(selection);
      setLoading(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [items, totalItems, delay]);

  return [selectedItems, loading, errorMessage];
}

function getRandomSelection<T>(arr: T[], totalItems: number): T[] {
  const result = [];
  const arrCopy = [...arr];
  const maxItems = Math.min(totalItems, arr.length);

  for (let i = 0; i < maxItems; i++) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy.splice(randomIndex, 1)[0]);
  }

  return result;
}

export default useRandomSelection;
