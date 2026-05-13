const FAVORITES_STORAGE_KEY = "hermes-favorites";

export const state = {
  products: [],
  loading: true,
  submitted: false,
  favorites: loadFavorites(),
  flashMessage: "",
};

function loadFavorites() {
  try {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!storedFavorites) {
      return new Set();
    }

    return new Set(JSON.parse(storedFavorites));
  } catch (error) {
    console.error("No se pudieron leer los favoritos guardados.", error);
    return new Set();
  }
}

function persistFavorites() {
  localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(Array.from(state.favorites)),
  );
}

export function toggleFavorite(productId) {
  const isFavorite = state.favorites.has(productId);

  if (isFavorite) {
    state.favorites.delete(productId);
  } else {
    state.favorites.add(productId);
  }

  persistFavorites();

  return !isFavorite;
}

export function showFlashMessage(message) {
  state.flashMessage = message;
}

export function clearFlashMessage() {
  state.flashMessage = "";
}

export async function loadProducts(onComplete) {
  try {
    const response = await fetch("/data/products.json");
    state.products = await response.json();
  } catch (error) {
    console.error("No se pudo cargar el catálogo;logo local.", error);
    state.products = [];
  } finally {
    state.loading = false;
    onComplete();
  }
}
