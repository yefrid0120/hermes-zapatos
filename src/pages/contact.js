export function contactPage(state) {
  return `
    <div class="min-h-screen bg-[#F5F5F5]">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div class="mb-10 text-center sm:mb-12">
          <h1 class="mb-4 text-3xl text-[#111111] sm:text-4xl">Contacto</h1>
          <p class="text-base text-gray-600 sm:text-xl">&iquest;Tienes alguna pregunta? Estamos aqu&iacute; para ayudarte</p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div class="rounded-2xl bg-white p-5 sm:p-8">
            <h2 class="mb-6 text-xl text-[#111111] sm:text-2xl">Env&iacute;anos un mensaje</h2>

            ${
              state.submitted
                ? `
                  <div class="mb-6 rounded-lg bg-[#A3E635] p-4 text-[#111111]">
                    &iexcl;Mensaje enviado con &eacute;xito! Te contactaremos pronto.
                  </div>
                `
                : ""
            }

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
  `;
}
