import { useState, useCallback } from "react";

const getStorageValue = <Value>(key: string, initialValue: Value): Value => {
  if (typeof window === "undefined") return initialValue;

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (err) {
    console.error(err);
    return initialValue;
  }
};

export const useLocalStorage = <Value>(key: string, initialValue: Value) => {
  const [storedValue, setStoredValue] = useState(
    getStorageValue(key, initialValue)
  );

  const setValue = useCallback(
    (newValue: Value | ((val: Value) => Value)) => {
      try {
        const valueToStore =
          newValue instanceof Function ? newValue(storedValue) : newValue;

        setStoredValue(valueToStore);

        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (err) {
        console.error(err);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue] as const;
};
