import { imageMarkup } from "../components/image-markup.js";

export function homePage(state) {
  const featured = state.products[0];

  return `
    <div class="min-h-screen">
      <section class="bg-gradient-to-br from-[#111111] to-[#2B2B2B] px-4 py-14 text-white sm:px-6 sm:py-20">
        <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 class="mb-5 text-4xl leading-tight sm:mb-6 sm:text-5xl">
              El futuro del <br />
              <span class="text-[#A3E635]">rendimiento deportivo</span>
            </h1>
            <p class="mb-8 max-w-2xl text-base text-gray-300 sm:text-xl">
              Dise&ntilde;o innovador que se adapta a tu estilo de vida activo.
              Descubre la nueva generaci&oacute;n de calzado deportivo.
            </p>
            <a href="/products" data-link class="inline-flex w-full items-center justify-center rounded-lg bg-[#2563EB] px-8 py-3 text-white transition-colors hover:bg-[#1d4ed8] sm:w-auto">
              Ver cat&aacute;logo
            </a>
          </div>
          <div class="relative">
            <div class="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-8">
              ${imageMarkup({
                src: featured?.image ?? "",
                alt: featured?.name ?? "Zapato deportivo Hermes",
                className: "w-full h-auto rounded-lg",
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#F5F5F5] px-4 py-14 sm:px-6 sm:py-20">
        <div class="mx-auto max-w-7xl">
          <h2 class="mb-12 text-center text-3xl text-[#111111] sm:mb-16 sm:text-4xl">&iquest;Por qu&eacute; elegir Hermes?</h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div class="rounded-xl bg-white p-6 text-center sm:p-8">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]">
                <span class="text-3xl text-white">&#9889;</span>
              </div>
              <h3 class="mb-3 text-xl text-[#111111]">Dise&ntilde;o moderno</h3>
              <p class="text-gray-600">Estilo contempor&aacute;neo que combina funcionalidad y est&eacute;tica</p>
            </div>
            <div class="rounded-xl bg-white p-6 text-center sm:p-8">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#A3E635]">
                <span class="text-3xl text-[#111111]">&hearts;</span>
              </div>
              <h3 class="mb-3 text-xl text-[#111111]">Comodidad extrema</h3>
              <p class="text-gray-600">Tecnolog&iacute;a de amortiguaci&oacute;n para todo el d&iacute;a</p>
            </div>
            <div class="rounded-xl bg-white p-6 text-center sm:p-8">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]">
                <span class="text-3xl text-white">&#10022;</span>
              </div>
              <h3 class="mb-3 text-xl text-[#111111]">Estilo &uacute;nico</h3>
              <p class="text-gray-600">Dise&ntilde;os exclusivos para destacar en cada paso</p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 py-14 sm:px-6 sm:py-20">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-6 text-3xl text-[#111111] sm:text-4xl">Descubre nuestra colecci&oacute;n</h2>
          <p class="mb-8 text-base text-gray-600 sm:text-xl">
            Explora todos nuestros modelos y encuentra el zapato perfecto para ti
          </p>
          <a href="/products" data-link class="inline-flex w-full items-center justify-center rounded-lg bg-[#111111] px-8 py-4 text-white transition-colors hover:bg-[#2B2B2B] sm:w-auto sm:px-10">
            Ir al cat&aacute;logo
          </a>
        </div>
      </section>
    </div>
  `;
}
