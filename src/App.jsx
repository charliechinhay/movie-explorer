import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Home from "./pages/Home/Home.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import { FavoritesProvider } from "./Contexts/FavoritesContext.jsx";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
        <Footer />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
