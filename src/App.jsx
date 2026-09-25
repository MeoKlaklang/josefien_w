import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OverMij from "./pages/OverMij";
import Werkwijze from "./pages/Werkwijze";
import Praktisch from "./pages/Praktisch";
import Contact from "./pages/Contact";
import Afspraak from "./pages/Afspraak";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/over-mij"
          element={<OverMij />}
        />

        <Route
          path="/werkwijze"
          element={<Werkwijze />}
        />

        <Route
          path="/praktisch"
          element={<Praktisch />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/afspraak"
          element={<Afspraak />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;