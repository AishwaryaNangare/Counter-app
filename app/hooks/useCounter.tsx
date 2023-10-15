import { useState, useEffect } from "react";
import Cookies from "js-cookie";
export const useCounter = (initialValue: number, value: number) => {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const savedCount = Cookies.get("counter");
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  const increment = () => {
    setCount((prevState) => prevState + value);
    Cookies.set("counter", count + value, { expires: 7 });
  };

  const decrement = () => {
    setCount((prevState) => prevState - value);
    Cookies.set("counter", count - value, { expires: 7 });
  };

  const reset = () => {
    setCount(initialValue);
    Cookies.remove("counter");
  };

  return { count, increment, decrement, reset };
};
