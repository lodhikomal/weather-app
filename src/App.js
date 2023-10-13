import logo from "./logo.svg";
import "./App.css";
import Weather from "./component/Weather";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
