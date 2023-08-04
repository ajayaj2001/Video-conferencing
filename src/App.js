import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./Reset";
import Signout from "./components/Dashboard/Signout/signoutpage";
import UserListPage from "./components/Dashboard/UserListPage/UserList"
function App() {
  return (
    <div className="app">
       
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/signout" element={<Signout />} />
          <Route exact path="/user-list" element={<UserListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
