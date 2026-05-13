export function loadingPage() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div class="px-4 text-center">
        <div class="mx-auto mb-4 h-10 w-10 rounded-full border-4 border-gray-200 border-t-[#2563EB] animate-spin"></div>
        <p class="text-sm text-gray-600 sm:text-base">Cargando cat&aacute;logo...</p>
      </div>
    </div>
  `;
}
