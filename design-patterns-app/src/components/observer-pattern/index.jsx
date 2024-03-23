import ParentComponent from "./components/parent";
import mitt from "mitt";

// we need to export a emmiter from App.js so that it can be subscribed by any component
export const emitter = mitt();

function App() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default App;