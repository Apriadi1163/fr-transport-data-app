import { Routes, Route } from "react-router-dom"
import Appdata from "./page/Appdata";
import Adddata from "./page/Adddata";
import Detaildata from "./page/Detaildata";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Appdata />} />
      <Route path="/add-data" element={<Adddata />} />
      <Route path="/detail/:id" element={<Detaildata />} />
    </Routes>
  );
}

export default App;
