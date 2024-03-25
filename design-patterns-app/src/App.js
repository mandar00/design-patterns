import logo from './logo.svg';
import './App.css';
import mitt from "mitt";
import SearchMeal from './components/search-meals';


export const emitter = mitt();

function App() {
  return (
    <div className="App">
      <SearchMeal/>
    </div>
  );
}

export default App;
