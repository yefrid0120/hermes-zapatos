import { escapeHtml } from "../utils/html.js";

export function imageMarkup({ src, alt, className, square = false }) {
  const boxClass = square ? "aspect-square overflow-hidden bg-gray-100" : "";

  return `
    <div class="${boxClass}">
      <img
        src="${escapeHtml(src)}"
        alt="${escapeHtml(alt)}"
        class="${className}"
        data-fallback-image="true"
      />
    </div>
  `;
}
