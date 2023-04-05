import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      style={{ backgroundColor: "#E1F8DC", height: "100vh" }}
      className="App"
    >
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
