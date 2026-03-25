export function getFavorites() {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function toggleFavorite(movie) {
  const favorites = getFavorites();

  const exists = favorites.find((m) => m.id === movie.id);

  let updateFavorites;

  if (exists) {
    updateFavorites = favorites.filter((m) => m.id !== movie.id);
  } else {
    updateFavorites = [...favorites, movie];
  }

  saveFavorites(updateFavorites);

  return updateFavorites;
}
