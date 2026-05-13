import { escapeHtml } from "../utils/html.js";

export function toast(message) {
  if (!message) {
    return "";
  }

  return `
    <div class="fixed left-4 right-4 top-4 z-50 rounded-xl border border-[#8BCB2A] bg-[#A3E635] px-4 py-3 text-[#111111] shadow-2xl sm:left-auto sm:right-6 sm:top-6 sm:max-w-sm sm:px-5 sm:py-4">
      <p class="text-sm font-medium">${escapeHtml(message)}</p>
    </div>
  `;
}
