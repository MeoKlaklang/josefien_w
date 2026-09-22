import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import OverMij from "./pages/OverMij";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-mij" element={<OverMij />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;