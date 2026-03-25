/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (movie) => {
    const exists = favorites.find((m) => m.id === movie.id);
    let updated;

    if (exists) {
      updated = favorites.filter((m) => m.id !== movie.id);
    } else {
      updated = [...favorites, movie];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
