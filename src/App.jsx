import AppRoutes from "./routes/AppRoutes";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <hr className="border-none  h-px bg-[#ccc] m-0" />
      <AppRoutes />
    </>
  );
}

export default App;
