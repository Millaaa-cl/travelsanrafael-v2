# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

**Versión 2** del sitio de reservas de **travelsanrafael.cl** (reservas por WhatsApp, sin pago en línea ni backend; la v1 con Flow + PHP vive en `C:\Users\holam\travelsanrafael`). Un solo producto: el Tour Full Day Laguna San Rafael (Aysén, Chile). Es bilingüe (ES por defecto en `/`, EN en `/en/`) y está optimizado para SEO, GEO y AEO.

Es 100 % estático: se publica en un hosting cPanel (Apache) subiendo el contenido de `dist/` a `public_html`. No hay Node, PHP ni base de datos en uso. El repo git de esta carpeta **no tiene remoto** (no hacer push al repo de la v1).

El usuario se comunica en español: los textos del sitio, los comentarios y la documentación están en español.

## Comandos

```powershell
npm.cmd run dev       # http://localhost:4321 (en PowerShell usar npm.cmd si la ExecutionPolicy bloquea npm.ps1)
npm.cmd run build     # genera dist/
npm.cmd run audit     # build + scripts/seo-audit.mjs (title/description/H1/canonical/hreflang/alt/JSON-LD por página; exit 1 si hay advertencias)
npm.cmd run package:prueba  # igual, pero genera costacarrera-v2-PRUEBA.zip para un subdominio de prueba: scripts/staging.mjs agrega noindex (meta + X-Robots-Tag) y bloquea robots.txt. Después vuelve a correr "package" para dejar dist/ limpio.
npm.cmd run package   # build + audit + costacarrera-v2-public_html.zip (usa `tar -a` para que las rutas del zip lleven "/"; Compress-Archive usa "\" y rompe la extracción en cPanel)
```

- No hay suite de tests. La verificación consiste en `npm run audit` (debe terminar con 0 advertencias) y en recorrer el widget en el navegador (en local funciona completo).

## Arquitectura

**Frontend estático (Astro 7, sin framework de UI, CSS propio en `src/styles/global.css`)**
- `src/data/tour.ts` es la **fuente única** de los datos del negocio y del tour: precio mostrado, horarios, punto de encuentro, dirección e imágenes (con sus dimensiones y textos alt ES/EN). Los textos, el JSON-LD (`src/lib/schema.ts`) y `/llms.txt` (`src/pages/llms.txt.ts`) se calculan desde aquí. Cambiar un dato en este archivo lo actualiza en todo el sitio.
- `src/i18n/content.ts` reúne todo el copy ES/EN de la home y del tour: itinerario, incluye, FAQ, reseñas, textos del widget y footer. Los párrafos `answer` y las FAQ son el contenido pensado para AEO.
- `src/i18n/routes.ts` mapea cada página a sus slugs ES/EN (que son distintos entre idiomas). Lo usan el menú, el selector de idioma y el hreflang (`Base.astro`). **Al agregar una página, regístrala aquí.**
- Patrón de páginas:
  - las vistas en `src/views/*View.astro` reciben `lang`, y los archivos de `src/pages/` son envoltorios de una línea;
  - las páginas de texto (cómo llegar, nosotros, términos, blog) usan `src/views/ProsePage.astro` y tienen el contenido escrito directamente en el archivo de la página, uno por idioma;
  - el blog no usa content collections: sus metadatos están en `src/data/posts.ts` y sus rutas en `routes.ts`.
- `src/layouts/Base.astro` arma todo el `<head>` SEO: canonical, hreflang, OG, geo meta, y siempre el JSON-LD de Organization y WebSite más el `schema` que pase cada página. La marca se agrega al título solo si cabe (42 caracteres o menos).
- `src/components/Sections.astro` contiene todas las secciones del tour en un solo componente, controladas por `show={[...]}`. Lo comparten la home y la ficha del tour. El fondo blanco o gris de cada sección se alterna solo según el orden de `show` (función `bg()`), así que no hay que poner `section--ice` a mano. Con `withBooking` (lo usa la home), el bloque `answer` incluye el `BookingWidget`: texto y collage a la izquierda, widget sticky a la derecha (`.overview--booking`). En una página con el widget, `motion.ts` cambia los enlaces a `…/tour-laguna-san-rafael/#reservar` por `#reservar`.
- La ficha del tour (`TourView.astro`) tiene su propio layout: hero fotográfico, franja `.keyfacts` y una grilla `.tour-layout` con áreas `overview / booking / details`. El widget queda sticky en la columna derecha en pantallas de 1040 px o más. En móvil, el orden del DOM lo ubica justo después del resumen.
- **Marca: Costa Carrera Travel** (`business.name`). El logo está en `public/images/logo-costa-carrera-travel.png` (PNG transparente de 239×186, 3× del alto en el header) y en `-600.png` (para JSON-LD). Ambos se generaron desde el SVG del cliente (`C:\Users\holam\Downloads\logo-costa-carrera-travel.svg`), que no es vectorial: es un PNG de 960×740 embebido con máscara y pesa 466 KB, por eso no se usa directo. Las letras del logo son negras, así que va sobre fondos claros (el header sigue blanco).
- **Sistema de diseño "Ola y glaciar"** (`global.css`). Sigue la skill `frontend-design`: sin etiquetas en MAYÚSCULAS sobre los títulos, sin "·" en textos, sin "→" en botones y sin emojis como íconos.
  - **Paleta del logo:** `--ink` #1d1d1b, `--red` #d7262b (solo para la acción de reservar), `--teal` #2fb3c3 y `--teal-deep` #137f8c (texto), `--ice` #eaf6f8.
  - **Tipografía:** una sola familia, **Archivo** variable, con títulos en `wdth 62` y peso 800 y texto en `wdth 100`.
  - **Firma visual:** las olas del logo animadas (`Waves.astro`, prop `to` = color de la sección siguiente). El número de crestas debe ser par para que el bucle sea continuo.
- `Promo.astro` es el cupón de descuento que va justo después del hero (y de su franja `.keyfacts`) en la home y la ficha del tour. Sus textos están en `content.ts` → `promo`, y el botón abre WhatsApp con `promo.msg`. Por pedido del cliente, el cupón es azul `#408dde`, con el botón verde `#9fed8b` latiendo y un 🎁 que se sacude. A la izquierda tiene un video en bucle sin sonido (`public/videos/costa-carrera-travel-descuento.mp4`, 480×640, con portada `-poster.jpg`), que se pausa fuera de pantalla y con "reducir movimiento".
- `Hero.astro` es el hero compartido entre la home y el tour. El H1 se forma con `over` + `title`, e incluye la franja `.keyfacts` con contadores.
- **Movimiento:** todo está en `src/scripts/motion.ts`, que se carga en `Base.astro`.
  - Atributos: `[data-reveal="up|rise|side"]`, `[data-stagger]`, `[data-checks]`, `[data-count]`, `.route` (scroll → `--p` y `li.is-active`), `[data-parallax]`, `[data-lightbox]` (un `<dialog class="lightbox">` en Base), `[data-carousel]` y `.faq__body`.
  - La clase `.js` se agrega inline en el `<head>`. Si `motion.ts` no carga en 2,5 s, se agrega `.no-motion` y todo queda visible. `prefers-reduced-motion` desactiva todo.
- **Revisión visual:** `astro preview` más Edge headless (`msedge --headless=new --screenshot`).
  - Agrega `--force-prefers-reduced-motion`: si no, la captura sale a mitad de las animaciones (contadores incompletos, fotos sin revelar).
  - Edge no baja de unos 500 px de ancho, así que para ver móvil hay que cargar la página dentro de un `<iframe width="390">`.
  - Para medir desbordes horizontales en móvil no basta el iframe: hay que emular el dispositivo con Edge vía CDP (`--remote-debugging-port`, `Emulation.setDeviceMetricsOverride` con `mobile: true`) y comparar `document.documentElement.scrollWidth` con `clientWidth`. Los celulares ignoran `overflow-x: hidden` en `body`, así que un elemento más ancho que la pantalla hace que la página se deslice de lado.
  - En grillas CSS, un hijo que contiene un carrusel o una tabla ancha necesita `min-width: 0`; si no, la columna crece al ancho del contenido (pasó con `.reviews-wrap`). Como red de seguridad, `html` y `body` usan `overflow-x: clip`, que no rompe el `position: sticky`.
- `src/components/BookingWidget.astro` es JS vanilla y no llama a ningún servidor:
  - genera los días disponibles en el navegador desde `tour.booking` en `tour.ts` (`minDaysAhead`, `monthsAhead`, `seasonMonths`, `weekdays`, `closed`);
  - el total usa `priceFromCLP` / `priceChildCLP`;
  - al enviar, arma el mensaje con `content.ts` → `booking.msg` y abre `https://wa.me/<business.whatsapp>?text=…` con `window.open`, sin `'noopener'` en las features (con él siempre devuelve `null`). Si la ventana se bloquea, navega en la misma pestaña.
  - No hay control de cupos: el operador confirma por chat, y las fechas llenas se agregan a `closed`.
- `public/.htaccess` fuerza HTTPS y el dominio sin www, redirige con 301 las URLs del WordPress antiguo (`/itinerario`, `/cart`, …) y bloquea archivos ocultos.

## Datos del tour (confirmados por el cliente)

- **Precios:** $170.000 CLP por adulto y $120.000 CLP por niño de hasta 12 años (`priceFromCLP`, `priceChildCLP` y `childMaxAge` en `tour.ts`; en la v2 son también los del total del widget). El sitio dice "por adulto", no "por persona".
- **Horario:** salida a las 06:20 desde la esquina de Dagoberto Godoy con Exploradores (Puerto Río Tranquilo); regreso entre las 17:00 y las 18:00.
- **Itinerario:** 2 h de bus, 2 h de navegación con desayuno, 1 h frente al glaciar con degustación de whisky con hielo milenario, pisco sour o jugo, almuerzo y navegación de retorno con snack de alfajores, y regreso por tierra.

Los valores que quedan pendientes están marcados con `TODO` en el código: temporada, entrada a CONAF, coordenadas, redes sociales y razón social.

## Imágenes

Las fotos fuente del cliente están en `C:\Users\holam\Desktop\imagenes` y `C:\Users\holam\Desktop\nuevas imagenes` (esta última son fotos de WhatsApp de 1280 px, copiadas sin recomprimir). Las versiones optimizadas están en `public/images/`, en JPG con nombres descriptivos para SEO. El hero tiene una versión de escritorio de 1920×1080 y una para móvil de 900×1100, servidas con `<picture>`. Al reemplazar una imagen, actualiza también `w`/`h` y los textos alt en `tour.ts`.

- Usa fotos verticales en los espacios verticales (collage, embarcación, FAQ, reseñas) y horizontales en los pasos del itinerario y en el mapa.
- Si una foto vertical cae en un espacio horizontal (por ejemplo, en la galería), agrega `pos` (object-position, como `'50% 78%'`) para que el recorte muestre lo importante. Hoy solo la galería lee `pos`.
- La galería debe tener 3n + 3 fotos (12, 15, 18…) para que la grilla quede completa en escritorio y en móvil.
