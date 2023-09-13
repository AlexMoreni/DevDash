import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Page404 from "./pages/Page404";

import "./App.css";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState<boolean>(false);
  const [emailUser, setEmailUser] = useState<string>("");
  const [nameUser, setNameUser] = useState<string>("");
  const [passwordUser, setPasswordUser] = useState<string>("");
  const [imgProfileUser, setImgProfileUser] = useState<string>("");

  return (
    <Router>
      <NavBar logged={logged} photo={imgProfileUser} setLogged={setLogged} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            <Login
              logged={logged}
              setEmailUser={setEmailUser}
              setNameUser={setNameUser}
              setPasswordUser={setPasswordUser}
              setImgProfileUser={setImgProfileUser}
              setLogged={setLogged}
            />
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/edit"
          element={
            <Edit
              email={emailUser}
              name={nameUser}
              password={passwordUser}
              photoProfile={imgProfileUser}
            />
          }
        ></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
