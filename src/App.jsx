import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Início</h1>} />
        <Route path="/scanner" element={<h1>Scanner</h1>} />
        <Route path="/diy" element={<h1>DIY</h1>} />
        <Route path="/coleta" element={<h1>Coleta</h1>} />
        <Route path="/about" element={<h1>Sobre</h1>} />
      </Routes>
    </>
  );
}

export default App;
