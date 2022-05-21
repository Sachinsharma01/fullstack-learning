import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";
import "./App.css";

function App() {
  const value = useSelector((state) => state.mathOperation);
  const dispatch = useDispatch();
  return (
    <>
      <h2>React Redux Demo</h2>
      <div className="App">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{value}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default App;
