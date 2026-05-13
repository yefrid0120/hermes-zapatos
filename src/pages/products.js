import { imageMarkup } from "../components/image-markup.js";
import { escapeHtml } from "../utils/html.js";

export function productsPage(state) {
  const cards = state.products
    .map(
      (product) => `
        <article class="relative overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg">
          <button
            type="button"
            data-favorite-id="${product.id}"
            aria-label="Agregar a favoritos"
            class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl shadow-md transition hover:scale-105 ${
              state.favorites.has(product.id) ? "text-[#2563EB]" : "text-gray-400"
            }"
          >
            ${state.favorites.has(product.id) ? "&hearts;" : "&#9825;"}
          </button>
          ${imageMarkup({
            src: product.image,
            alt: product.name,
            className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
            square: true,
          })}
          <div class="p-5 sm:p-6">
            <h3 class="mb-2 text-lg text-[#111111] sm:text-xl">${escapeHtml(product.name)}</h3>
            <p class="mb-3 text-[#2563EB]">${escapeHtml(product.price)}</p>
            <p class="mb-4 text-sm text-gray-600">${escapeHtml(product.shortDescription)}</p>
            <a href="/product/${product.id}" data-link class="block w-full rounded-lg bg-[#111111] py-3 text-center text-white transition-colors hover:bg-[#2B2B2B] sm:py-2">
              Ver m&aacute;s
            </a>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <div class="min-h-screen bg-[#F5F5F5]">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div class="mb-10 text-center sm:mb-12">
          <h1 class="mb-4 text-3xl text-[#111111] sm:text-4xl">Nuestro cat&aacute;logo</h1>
          <p class="text-base text-gray-600 sm:text-xl">Descubre todos nuestros modelos de zapatos deportivos</p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          ${cards}
        </div>
      </div>
    </div>
  `;
}
