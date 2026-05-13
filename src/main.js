import "./styles/index.css";
import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { toast } from "./components/toast.js";
import { loadingPage } from "./pages/loading.js";
import { notFoundPage } from "./pages/not-found.js";
import { contactPage } from "./pages/contact.js";
import { homePage } from "./pages/home.js";
import { productDetailPage } from "./pages/product-detail.js";
import { productsPage } from "./pages/products.js";
import {
  clearFlashMessage,
  loadProducts,
  showFlashMessage,
  state,
  toggleFavorite,
} from "./lib/state.js";
import { hydrateImages } from "./utils/images.js";

const app = document.querySelector("#app");
let flashTimeoutId = null;

function routeView() {
  const path = window.location.pathname;

  if (state.loading) {
    document.title = "Hermes";
    return loadingPage();
  }

  if (path === "/") {
    document.title = "Hermes";
    return homePage(state);
  }

  if (path === "/products") {
    document.title = "Catálogo | Hermes";
    return productsPage(state);
  }

  if (path.startsWith("/product/")) {
    return productDetailPage(path.split("/")[2], state);
  }

  if (path === "/contact") {
    document.title = "Contacto | Hermes";
    return contactPage(state);
  }

  return notFoundPage();
}

function render() {
  app.innerHTML = `
    ${toast(state.flashMessage)}
    ${header()}
    ${routeView()}
    ${footer()}
  `;

  hydrateImages();
}

function navigate(pathname) {
  if (window.location.pathname === pathname) {
    return;
  }

  window.history.pushState({}, "", pathname);
  window.scrollTo({ top: 0, behavior: "auto" });
  render();
}

document.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-id]");

  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favoriteId);
    const wasAdded = toggleFavorite(id);

    if (wasAdded) {
      showFlashMessage("Producto agregado a favoritos");

      if (flashTimeoutId) {
        window.clearTimeout(flashTimeoutId);
      }

      flashTimeoutId = window.setTimeout(() => {
        clearFlashMessage();
        render();
      }, 2200);
    }

    render();
    return;
  }

  const link = event.target.closest("[data-link]");

  if (!link) {
    return;
  }

  const url = new URL(link.href, window.location.origin);

  if (url.origin !== window.location.origin) {
    return;
  }

  event.preventDefault();
  navigate(url.pathname);
});

document.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement) || form.id !== "contact-form") {
    return;
  }

  event.preventDefault();
  form.reset();
  state.submitted = true;
  render();

  window.setTimeout(() => {
    state.submitted = false;
    render();
  }, 3000);
});

window.addEventListener("popstate", render);

render();
loadProducts(render);
