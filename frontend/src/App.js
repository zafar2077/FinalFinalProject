import "./App.css";
import Leftbar from "./Components/Leftbar";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile";
import Favorite from "./Components/Favorite";
import Balance from "./Components/Balance";
import RegLogin from "./Components/RegLogin";

function App() {
  return (
    <div className="App">
      <Leftbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/reglogin" element={<RegLogin />} />
      </Routes>
    </div>
  );
}

export default App;
