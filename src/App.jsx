import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
import Diy from "./pages/Diy";
import Coleta from "./pages/Coleta";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <hr className="border-none  h-px bg-[#ccc] m-0" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/diy" element={<Diy />} />
        <Route path="/coleta" element={<Coleta />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
