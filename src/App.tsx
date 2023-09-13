import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Router>
      <NavBar logged={logged} setLogged={setLogged} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login logged={logged} setLogged={setLogged} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
