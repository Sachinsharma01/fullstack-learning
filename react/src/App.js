import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NewHome from "./components/NewHome";
import Form from "./components/Form";
import RenderList from "./components/RenderList";
import UseEffect from "./components/UseEffect";
import { createContext } from "react";

const autherName = createContext();

function App() {
  let name = "Sachin";
  return (
    <autherName.Provider value={"sachin"}>
      <div className="App">
        {/* <NewHome name={name} />
        <Form />
        <UseEffect /> */}
      </div>
    </autherName.Provider>
  );
}

export { App, autherName };
