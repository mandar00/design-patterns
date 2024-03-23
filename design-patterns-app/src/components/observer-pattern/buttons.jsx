import { emitter } from "./index";

const Buttons = (props) => {
  const onIncrementCounter = () => {
    emitter.emit("increment");
  };
//  when the button is clikced an event is emmited  
  const onDecrementCounter = () => {
    emitter.emit("decrement");
  };
  return (
    <div>
      <button onClick={onIncrementCounter}>➕</button>
      <button onClick={onDecrementCounter}>➖</button>
    </div>
  );
};
export default Buttons;