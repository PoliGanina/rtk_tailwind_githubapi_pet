import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage1";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </>
  );
}

export default App;
