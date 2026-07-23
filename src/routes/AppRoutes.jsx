import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Scanner from "../pages/Scanner";
import Diy from "../pages/Diy";
import Coleta from "../pages/Coleta";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scanner" element={<Scanner />} />
      <Route path="/diy" element={<Diy />} />
      <Route path="/coleta" element={<Coleta />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
