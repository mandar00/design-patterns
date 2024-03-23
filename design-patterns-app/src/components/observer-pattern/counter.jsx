import { useEffect, useState } from "react";
import { emitter } from "./index";

const Counter = () => {
  const [count, setCount] = useState(0);
//   this component listens to the emitter for any event called increment or decrement
  useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };
    const onDecrement = () => {
      setCount((count) => count - 1);
    };
    emitter.on("increment", onIncrement);
    emitter.on("decrement", onDecrement);

    // unsubscribe the emmiter before running the useEffect 
    return () => {
      emitter.off("increment", onIncrement);
      emitter.off("decrement", onDecrement);
    };
  }, []);
  return <div>#: {count}</div>;
};
export default Counter;
