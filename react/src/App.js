import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NewHome from "./components/NewHome";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <NewHome />
      <Form />
    </div>
  );
}

export default App;
