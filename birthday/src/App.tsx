import { BrowserRouter, Routes, Route } from "react-router-dom";
import Birthday from "./pages/Birthday";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Birthday />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;