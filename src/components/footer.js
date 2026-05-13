export function footer() {
  return `
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
  `;
}
