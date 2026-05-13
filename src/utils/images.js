const errorImageSrc =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function hydrateImages() {
  document.querySelectorAll("[data-fallback-image]").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.failed === "true") {
          return;
        }

        image.dataset.failed = "true";
        image.src = errorImageSrc;
        image.alt = "Error loading image";
        image.className = image.className.includes("object-cover")
          ? "w-full h-full object-contain p-8 bg-gray-100"
          : "w-full h-auto object-contain p-8 bg-gray-100 rounded-lg";
      },
      { once: true },
    );
  });
}
