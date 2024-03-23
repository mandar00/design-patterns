import { useRef } from "react";
import "./App.css";
import { Input } from "./input";

function App() {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
        {/* refs cannot be passed as props to childern components thus the ref accepting component has to be wrapped in forward ref */}
      <Input ref={inputRef} />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default App;