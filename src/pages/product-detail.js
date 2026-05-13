import { imageMarkup } from "../components/image-markup.js";
import { escapeHtml } from "../utils/html.js";

export function productDetailPage(id, state) {
  const product = state.products.find((item) => item.id === Number(id));

  if (!product) {
    document.title = "Producto no encontrado | Hermes";
    return `
      <div class="min-h-screen flex items-center justify-center px-4">
        <div class="text-center">
          <h2 class="mb-4 text-2xl">Producto no encontrado</h2>
          <a href="/products" data-link class="text-[#2563EB] hover:underline">Volver al cat&aacute;logo</a>
        </div>
      </div>
    `;
  }

  const isFavorite = state.favorites.has(product.id);
  const features = product.features
    .map(
      (feature) => `
        <li class="flex items-start gap-2 text-gray-600">
          <span class="mt-1 text-[#A3E635]">&bull;</span>
          <span>${escapeHtml(feature)}</span>
        </li>
      `,
    )
    .join("");

  document.title = `${product.name} | Hermes`;

  return `
    <div class="min-h-screen bg-[#F5F5F5]">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <a
          href="/products"
          data-link
          class="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#111111] sm:text-base"
        >
          <span class="text-xl leading-none">&larr;</span>
          Volver al cat&aacute;logo
        </a>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div class="rounded-2xl bg-white p-5 sm:p-8">
            ${imageMarkup({
              src: product.image,
              alt: product.name,
              className: "h-auto w-full rounded-lg",
            })}
          </div>

          <div class="rounded-2xl bg-white p-5 sm:p-8">
            <div class="mb-6 flex items-start justify-between gap-4">
              <div>
                <h1 class="mb-2 text-3xl text-[#111111] sm:text-4xl">${escapeHtml(product.name)}</h1>
                <p class="text-2xl text-[#2563EB] sm:text-3xl">${escapeHtml(product.price)}</p>
              </div>

              <button
                type="button"
                data-favorite-id="${product.id}"
                aria-label="Marcar como favorito"
                class="rounded-full p-3 transition-colors ${
                  isFavorite
                    ? "bg-[#A3E635] text-[#111111]"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }"
              >
                <span class="text-2xl leading-none">${isFavorite ? "&hearts;" : "&#9825;"}</span>
              </button>
            </div>

            <div class="mb-8">
              <h3 class="mb-3 text-lg text-[#111111] sm:text-xl">Descripci&oacute;n</h3>
              <p class="text-sm leading-relaxed text-gray-600 sm:text-base">${escapeHtml(product.description)}</p>
            </div>

            <div class="mb-8">
              <h3 class="mb-3 text-lg text-[#111111] sm:text-xl">Caracter&iacute;sticas</h3>
              <ul class="space-y-2">${features}</ul>
            </div>

            <a
              href="/contact"
              data-link
              class="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-4 text-center text-white transition-colors hover:bg-[#1d4ed8]"
            >
              <span class="text-lg">&#9993;</span>
              Solicitar informaci&oacute;n
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
