import { Routes, Route } from "react-router-dom"
import Appdata from "./page/Appdata";
import Adddata from "./page/Adddata";
import Detaildata from "./page/Detaildata";
import Update from "./page/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Appdata />} />
      <Route path="/add-data" element={<Adddata />} />
      <Route path="/detail/:id" element={<Detaildata />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
