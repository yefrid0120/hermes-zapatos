import logoUrl from "../assets/75c109f15e02316100dcb9bbe6afb315b2611969.png";

function activeLink(path) {
  return window.location.pathname === path ? "text-[#A3E635]" : "text-white";
}

export function header() {
  return `
    <header class="bg-[#111111] px-4 py-4 text-white sm:px-6">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" data-link class="flex items-center justify-center gap-3 sm:justify-start">
          <img src="${logoUrl}" alt="Hermes Logo" class="h-10 w-auto sm:h-12" />
          <span class="text-xl tracking-tight sm:text-2xl">Hermes</span>
        </a>
        <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-end sm:gap-8 sm:text-base">
          <a href="/" data-link class="transition-colors hover:text-[#A3E635] ${activeLink("/")}">Inicio</a>
          <a href="/products" data-link class="transition-colors hover:text-[#A3E635] ${activeLink("/products")}">Cat&aacute;logo</a>
          <a href="/contact" data-link class="transition-colors hover:text-[#A3E635] ${activeLink("/contact")}">Contacto</a>
        </nav>
      </div>
    </header>
  `;
}
