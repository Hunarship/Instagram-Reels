import { Route,Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./mainpage";
import SingleVideo from "./singlevideo";
import { Privacy } from "./Privacy";
import {Term} from "./Term"

export default function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<MainPage />}/> */}
        {/* <Route path="/videos/:id" element={<SingleVideo />}/> */}
        <Route path="/" element={<Privacy />} />
        <Route path="/term" element={<Term />} />
      </Routes>
    </div>
  );
}
