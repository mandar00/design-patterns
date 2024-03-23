import { useState } from "react";
import "./App.css";
import Counter from "./counter";

function App() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts: </span> <Counter key="shirts" />{" "}
        </>
      ) : (
        <>
          <span>Shoes counts: </span> <Counter key="shoes" />{" "}
        </>
      )}
      <br />
      {/* 
        when we click on switch button the component rerenders and changes the text from shirts to shoes and vise versa 
        if the key is not passed to the counter component react will persist the states in counter component  and wont reset it to 0 
        if the key is not provided but the text and couter are wrapped in different parents  ie 
      {changeShirts ? (
        <div>
          <span>Shirts counts: </span> <Counter key="shirts" />{" "}
        </div>
      ) : (
        <section>
          <span>Shoes counts: </span> <Counter key="shoes" />{" "}
        </section>
      )}

      here the counter state will reset as DOM tree will look something like this 
        div
        /\
    div   section
    |       |
 span      span
    |       |
counter   counter


thus react will create a new instance of counter as when we switch it will be a complete new node in the DOM tree


instead of that we can just assign different keys to counter component in both the cases 
so as it will be treated as a new component every time we switch 
      */}
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;