export function notFoundPage() {
  document.title = "404 | Hermes";

  return `
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="mb-4 text-4xl sm:text-5xl">404</h1>
        <p class="text-lg text-gray-600 sm:text-xl">P&aacute;gina no encontrada</p>
      </div>
    </div>
  `;
}
