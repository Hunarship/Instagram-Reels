import { Route,Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./mainpage";
import SingleVideo from "./singlevideo";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/videos/:id" element={<SingleVideo />}/>
      </Routes>
    </div>
  );
}
