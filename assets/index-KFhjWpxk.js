(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function p(){return`
    <footer class="mt-16 bg-[#111111] px-4 py-10 text-white sm:mt-20 sm:px-6 sm:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 class="mb-4 text-xl">Hermes</h3>
            <p class="text-gray-400">Zapatos deportivos modernos para tu estilo de vida activo</p>
          </div>
          <div>
            <h4 class="mb-4">Navegaci&oacute;n</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/" data-link class="transition-colors hover:text-white">Inicio</a></li>
              <li><a href="/products" data-link class="transition-colors hover:text-white">Cat&aacute;logo</a></li>
              <li><a href="/contact" data-link class="transition-colors hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4">Contacto</h4>
            <ul class="space-y-2 text-gray-400">
              <li>info@hermes.com</li>
              <li>+1 (555) 123-4567</li>
              <li>S&iacute;guenos en redes</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400 sm:text-base">
          <p>&copy; 2026 Hermes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `}const g="/hermes-zapatos/assets/75c109f15e02316100dcb9bbe6afb315b2611969-CZpi-FhV.png";function d(e){return window.location.pathname===e?"text-[#A3E635]":"text-white"}function f(){return`
    <header class="bg-[#111111] px-4 py-4 text-white sm:px-6">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" data-link class="flex items-center justify-center gap-3 sm:justify-start">
          <img src="${g}" alt="Hermes Logo" class="h-10 w-auto sm:h-12" />
          <span class="text-xl tracking-tight sm:text-2xl">Hermes</span>
        </a>
        <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-end sm:gap-8 sm:text-base">
          <a href="/" data-link class="transition-colors hover:text-[#A3E635] ${d("/")}">Inicio</a>
          <a href="/products" data-link class="transition-colors hover:text-[#A3E635] ${d("/products")}">Cat&aacute;logo</a>
          <a href="/contact" data-link class="transition-colors hover:text-[#A3E635] ${d("/contact")}">Contacto</a>
        </nav>
      </div>
    </header>
  `}function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function v(e){return e?`
    <div class="fixed left-4 right-4 top-4 z-50 rounded-xl border border-[#8BCB2A] bg-[#A3E635] px-4 py-3 text-[#111111] shadow-2xl sm:left-auto sm:right-6 sm:top-6 sm:max-w-sm sm:px-5 sm:py-4">
      <p class="text-sm font-medium">${l(e)}</p>
    </div>
  `:""}function h(){return`
    <div class="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div class="px-4 text-center">
        <div class="mx-auto mb-4 h-10 w-10 rounded-full border-4 border-gray-200 border-t-[#2563EB] animate-spin"></div>
        <p class="text-sm text-gray-600 sm:text-base">Cargando cat&aacute;logo...</p>
      </div>
    </div>
  `}function b(){return document.title="404 | Hermes",`
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="mb-4 text-4xl sm:text-5xl">404</h1>
        <p class="text-lg text-gray-600 sm:text-xl">P&aacute;gina no encontrada</p>
      </div>
    </div>
  `}function y(e){return`
    <div class="min-h-screen bg-[#F5F5F5]">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div class="mb-10 text-center sm:mb-12">
          <h1 class="mb-4 text-3xl text-[#111111] sm:text-4xl">Contacto</h1>
          <p class="text-base text-gray-600 sm:text-xl">&iquest;Tienes alguna pregunta? Estamos aqu&iacute; para ayudarte</p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div class="rounded-2xl bg-white p-5 sm:p-8">
            <h2 class="mb-6 text-xl text-[#111111] sm:text-2xl">Env&iacute;anos un mensaje</h2>

            ${e.submitted?`
                  <div class="mb-6 rounded-lg bg-[#A3E635] p-4 text-[#111111]">
                    &iexcl;Mensaje enviado con &eacute;xito! Te contactaremos pronto.
                  </div>
                `:""}

            <form id="contact-form" class="space-y-6">
              <div>
                <label for="name" class="mb-2 block text-[#111111]">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value=""
                  required
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label for="email" class="mb-2 block text-[#111111]">Correo electr&oacute;nico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value=""
                  required
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label for="message" class="mb-2 block text-[#111111]">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  class="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  placeholder="Escribe tu mensaje aqu&iacute;..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-lg bg-[#2563EB] py-4 text-white transition-colors hover:bg-[#1d4ed8]"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div class="space-y-6">
            <div class="rounded-2xl bg-white p-5 sm:p-8">
              <h2 class="mb-6 text-xl text-[#111111] sm:text-2xl">Informaci&oacute;n de contacto</h2>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#2563EB]">
                    <span class="text-xl text-white">&#9993;</span>
                  </div>
                  <div>
                    <h3 class="mb-1 text-[#111111]">Correo electr&oacute;nico</h3>
                    <p class="text-gray-600">info@hermes.com</p>
                    <p class="text-gray-600">soporte@hermes.com</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#A3E635]">
                    <span class="text-xl text-[#111111]">&#9742;</span>
                  </div>
                  <div>
                    <h3 class="mb-1 text-[#111111]">Tel&eacute;fono</h3>
                    <p class="text-gray-600">+1 (555) 123-4567</p>
                    <p class="text-gray-600">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#2563EB]">
                    <span class="text-xl text-white">&#8982;</span>
                  </div>
                  <div>
                    <h3 class="mb-1 text-[#111111]">Ubicaci&oacute;n</h3>
                    <p class="text-gray-600">123 Avenida Principal</p>
                    <p class="text-gray-600">Ciudad, Estado 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-2xl bg-gradient-to-br from-[#111111] to-[#2B2B2B] p-5 text-white sm:p-8">
              <h3 class="mb-3 text-xl">&iquest;Necesitas ayuda inmediata?</h3>
              <p class="mb-6 text-gray-300">
                Nuestro equipo est&aacute; listo para responder todas tus preguntas sobre nuestros productos
              </p>
              <div class="flex gap-4">
                <div class="h-2 w-2 rounded-full bg-[#A3E635] animate-pulse"></div>
                <p class="text-sm text-gray-300">Disponible ahora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function x({src:e,alt:t,className:s,square:o=!1}){return`
    <div class="${o?"aspect-square overflow-hidden bg-gray-100":""}">
      <img
        src="${l(e)}"
        alt="${l(t)}"
        class="${s}"
        data-fallback-image="true"
      />
    </div>
  `}function w(e){const t=e.products[0];return`
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
              ${x({src:(t==null?void 0:t.image)??"",alt:(t==null?void 0:t.name)??"Zapato deportivo Hermes",className:"w-full h-auto rounded-lg"})}
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
  `}function E(e,t){const s=t.products.find(r=>r.id===Number(e));if(!s)return document.title="Producto no encontrado | Hermes",`
      <div class="min-h-screen flex items-center justify-center px-4">
        <div class="text-center">
          <h2 class="mb-4 text-2xl">Producto no encontrado</h2>
          <a href="/products" data-link class="text-[#2563EB] hover:underline">Volver al cat&aacute;logo</a>
        </div>
      </div>
    `;const o=t.favorites.has(s.id),a=s.features.map(r=>`
        <li class="flex items-start gap-2 text-gray-600">
          <span class="mt-1 text-[#A3E635]">&bull;</span>
          <span>${l(r)}</span>
        </li>
      `).join("");return document.title=`${s.name} | Hermes`,`
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
            ${x({src:s.image,alt:s.name,className:"h-auto w-full rounded-lg"})}
          </div>

          <div class="rounded-2xl bg-white p-5 sm:p-8">
            <div class="mb-6 flex items-start justify-between gap-4">
              <div>
                <h1 class="mb-2 text-3xl text-[#111111] sm:text-4xl">${l(s.name)}</h1>
                <p class="text-2xl text-[#2563EB] sm:text-3xl">${l(s.price)}</p>
              </div>

              <button
                type="button"
                data-favorite-id="${s.id}"
                aria-label="Marcar como favorito"
                class="rounded-full p-3 transition-colors ${o?"bg-[#A3E635] text-[#111111]":"bg-gray-100 text-gray-400 hover:bg-gray-200"}"
              >
                <span class="text-2xl leading-none">${o?"&hearts;":"&#9825;"}</span>
              </button>
            </div>

            <div class="mb-8">
              <h3 class="mb-3 text-lg text-[#111111] sm:text-xl">Descripci&oacute;n</h3>
              <p class="text-sm leading-relaxed text-gray-600 sm:text-base">${l(s.description)}</p>
            </div>

            <div class="mb-8">
              <h3 class="mb-3 text-lg text-[#111111] sm:text-xl">Caracter&iacute;sticas</h3>
              <ul class="space-y-2">${a}</ul>
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
  `}function j(e){return`
    <div class="min-h-screen bg-[#F5F5F5]">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div class="mb-10 text-center sm:mb-12">
          <h1 class="mb-4 text-3xl text-[#111111] sm:text-4xl">Nuestro cat&aacute;logo</h1>
          <p class="text-base text-gray-600 sm:text-xl">Descubre todos nuestros modelos de zapatos deportivos</p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          ${e.products.map(s=>`
        <article class="relative overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg">
          <button
            type="button"
            data-favorite-id="${s.id}"
            aria-label="Agregar a favoritos"
            class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl shadow-md transition hover:scale-105 ${e.favorites.has(s.id)?"text-[#2563EB]":"text-gray-400"}"
          >
            ${e.favorites.has(s.id)?"&hearts;":"&#9825;"}
          </button>
          ${x({src:s.image,alt:s.name,className:"h-full w-full object-cover transition-transform duration-300 hover:scale-105",square:!0})}
          <div class="p-5 sm:p-6">
            <h3 class="mb-2 text-lg text-[#111111] sm:text-xl">${l(s.name)}</h3>
            <p class="mb-3 text-[#2563EB]">${l(s.price)}</p>
            <p class="mb-4 text-sm text-gray-600">${l(s.shortDescription)}</p>
            <a href="/product/${s.id}" data-link class="block w-full rounded-lg bg-[#111111] py-3 text-center text-white transition-colors hover:bg-[#2B2B2B] sm:py-2">
              Ver m&aacute;s
            </a>
          </div>
        </article>
      `).join("")}
        </div>
      </div>
    </div>
  `}const m="hermes-favorites",i={products:[],loading:!0,submitted:!1,favorites:I(),flashMessage:""};function I(){try{const e=localStorage.getItem(m);return e?new Set(JSON.parse(e)):new Set}catch(e){return console.error("No se pudieron leer los favoritos guardados.",e),new Set}}function B(){localStorage.setItem(m,JSON.stringify(Array.from(i.favorites)))}function A(e){const t=i.favorites.has(e);return t?i.favorites.delete(e):i.favorites.add(e),B(),!t}function $(e){i.flashMessage=e}function F(){i.flashMessage=""}async function N(e){try{const t=await fetch("/data/products.json");i.products=await t.json()}catch(t){console.error("No se pudo cargar el catálogo;logo local.",t),i.products=[]}finally{i.loading=!1,e()}}const P="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function k(){document.querySelectorAll("[data-fallback-image]").forEach(e=>{e.addEventListener("error",()=>{e.dataset.failed!=="true"&&(e.dataset.failed="true",e.src=P,e.alt="Error loading image",e.className=e.className.includes("object-cover")?"w-full h-full object-contain p-8 bg-gray-100":"w-full h-auto object-contain p-8 bg-gray-100 rounded-lg")},{once:!0})})}const H=document.querySelector("#app");let u=null;function S(){const e=window.location.pathname;return i.loading?(document.title="Hermes",h()):e==="/"?(document.title="Hermes",w(i)):e==="/products"?(document.title="Catálogo | Hermes",j(i)):e.startsWith("/product/")?E(e.split("/")[2],i):e==="/contact"?(document.title="Contacto | Hermes",y(i)):b()}function c(){H.innerHTML=`
    ${v(i.flashMessage)}
    ${f()}
    ${S()}
    ${p()}
  `,k()}function L(e){window.location.pathname!==e&&(window.history.pushState({},"",e),window.scrollTo({top:0,behavior:"auto"}),c())}document.addEventListener("click",e=>{const t=e.target.closest("[data-favorite-id]");if(t){const a=Number(t.dataset.favoriteId);A(a)&&($("Producto agregado a favoritos"),u&&window.clearTimeout(u),u=window.setTimeout(()=>{F(),c()},2200)),c();return}const s=e.target.closest("[data-link]");if(!s)return;const o=new URL(s.href,window.location.origin);o.origin===window.location.origin&&(e.preventDefault(),L(o.pathname))});document.addEventListener("submit",e=>{const t=e.target;!(t instanceof HTMLFormElement)||t.id!=="contact-form"||(e.preventDefault(),t.reset(),i.submitted=!0,c(),window.setTimeout(()=>{i.submitted=!1,c()},3e3))});window.addEventListener("popstate",c);c();N(c);
