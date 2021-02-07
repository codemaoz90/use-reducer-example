import "./styles.css";
import { useReducer } from "react";
export default function App() {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);
  return (
    <div className="App">
      <h1>{sum}</h1>
      <button onClick={() => dispatch(1)}>Add 1</button>
    </div>
  );
}
