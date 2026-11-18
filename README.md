# travelsanrafael.cl: versión 2 (reservas por WhatsApp)

Sitio estático en Astro, bilingüe (ES/EN), optimizado para SEO, GEO y AEO. En esta versión **no hay pago en línea ni backend**: el cliente elige la fecha y los pasajeros en el calendario, completa sus datos y la solicitud se abre en WhatsApp con un mensaje listo para enviar. El equipo confirma los cupos y coordina el pago por chat.

Repositorio: https://github.com/Millaaa-cl/travelsanrafael-v2. La versión 1, con Flow.cl y backend PHP + MySQL, está en `C:\Users\holam\travelsanrafael` (repo `Millaaa-cl/costacarreratravel`).

## Estructura

| Carpeta / archivo | Qué contiene |
|---|---|
| `src/data/tour.ts` | **Fuente única** de datos del negocio y del tour: precios, horarios, dirección, imágenes, número de WhatsApp (`business.whatsapp`) y fechas del calendario (`tour.booking`). Edita aquí primero. |
| `src/i18n/content.ts` | Textos ES/EN de la home y la ficha del tour: itinerario, incluye, FAQ, reseñas, widget y el mensaje de WhatsApp (`booking.msg`). |
| `src/pages/` | Páginas. Las de texto (cómo llegar, nosotros, blog, términos) se editan directamente aquí. |
| `src/components/BookingWidget.astro` | Calendario y formulario de reserva (JS vanilla, sin servidor). |
| `src/lib/schema.ts` | Datos estructurados JSON-LD (TravelAgency, TouristTrip, Product/Offer, FAQPage, Breadcrumb, Article). |
| `src/pages/llms.txt.ts` | Genera `/llms.txt` (resumen para IA) a partir de `tour.ts`. |
| `public/.htaccess` | HTTPS, dominio sin www, redirecciones 301 del WordPress antiguo, caché y seguridad. |
| `scripts/seo-audit.mjs` | Revisa title, description, H1, canonical, hreflang, alt y JSON-LD de cada página. |

## Comandos

```bash
npm install             # primera vez
npm run dev             # vista previa en http://localhost:4321 (el calendario funciona completo en local)
npm run audit           # build + auditoría SEO
npm run package         # build + auditoría + costacarrera-v2-public_html.zip listo para subir
npm run package:prueba  # igual, pero costacarrera-v2-PRUEBA.zip con noindex, para un subdominio de prueba
```

## Fechas del calendario

En `src/data/tour.ts`, `tour.booking` define qué días se pueden elegir:

- `minDaysAhead`: primer día reservable (1 = mañana).
- `monthsAhead`: cuántos meses se pueden navegar.
- `seasonMonths`: meses con salidas (hoy septiembre a abril).
- `weekdays`: días de la semana con salida (0 = domingo … 6 = sábado).
- `closed`: fechas puntuales sin salida, por ejemplo `['2026-12-25', '2027-01-01']`.

El calendario no conoce los cupos reales: si una fecha está llena, se avisa al cliente por WhatsApp y se agrega a `closed`.

## Publicación automática (GitHub Actions)

Cada push a `main` publica el sitio en travelsanrafael.cl sin zip. El workflow es `.github/workflows/deploy.yml` y hace lo siguiente:

1. GitHub construye el sitio y corre la auditoría SEO. Si hay advertencias, se detiene y no publica.
2. Sube `dist/` por FTPS a la carpeta del sitio, **solo los archivos que cambiaron**. Guarda un archivo `.ftp-deploy-sync-state.json` en el servidor para saber qué subió. Solo borra lo que él mismo subió y ya no existe, nunca archivos ajenos.

**Configuración (una vez):**
1. Respalda el WordPress de la carpeta de travelsanrafael.cl y mueve su contenido a una carpeta de respaldo, para dejarla vacía.
2. En cPanel, entra a *Cuentas FTP* y crea una cuenta (por ejemplo `deploy@travelsanrafael.cl`) cuyo **directorio** sea la carpeta del sitio.
3. En GitHub, entra al repo, luego a *Settings → Secrets and variables → Actions*, y crea `FTP_SERVER`, `FTP_USERNAME` (el nombre completo, con @dominio) y `FTP_PASSWORD`.
4. En *Actions*, abre **Publicar en travelsanrafael.cl** y usa **Run workflow** para la primera publicación.

Para ver si una publicación funcionó, abre la pestaña *Actions* del repo. Un check verde significa que se publicó. Si los secretos no existen, el workflow construye el sitio, muestra un aviso y no publica.

## Publicar en cPanel con zip (respaldo manual)

No requiere base de datos, PHP ni archivos de configuración.

1. **Respaldo:** descarga una copia completa del WordPress actual (Administrador de archivos y la base de datos desde phpMyAdmin).
2. Ejecuta `npm run package`.
3. Mueve el WordPress a una carpeta de respaldo y vacía `public_html`.
4. Sube `costacarrera-v2-public_html.zip` y usa *Extraer*.
5. En el *Administrador de archivos*, activa "Mostrar archivos ocultos" y verifica que exista `.htaccess`.
6. **Search Console y Bing Webmaster:** verifica el dominio y envía `https://travelsanrafael.cl/sitemap-index.xml`.
7. **Google Business Profile:** usa exactamente el mismo nombre, dirección y teléfono que en `tour.ts`.

Para un **subdominio de prueba**, usa `npm run package:prueba`, sube `costacarrera-v2-PRUEBA.zip` a la carpeta del subdominio y extráelo. Después vuelve a correr `npm run package` para dejar `dist/` limpio.

Para **actualizar** el sitio después: edita, corre `npm run package`, sube el zip y extráelo sobre `public_html`.

## Cómo funciona una reserva

1. El calendario muestra los días de `tour.booking`.
2. El cliente elige fecha, adultos y niños. El widget calcula el total estimado con `priceFromCLP` y `priceChildCLP`.
3. Completa nombre, teléfono (obligatorios), país, correo, alojamiento y comentarios, y acepta los términos.
4. Al tocar "Reservar por WhatsApp" se abre `wa.me/<business.whatsapp>` con un mensaje que lleva todos esos datos, en el idioma de la página.
5. El cliente envía el mensaje. El equipo responde, confirma los cupos y coordina el pago.

## Pendientes de contenido (buscar `TODO` en el código)

- [x] Precios ($170.000 adulto, $120.000 niño hasta 12 años), horario de salida (06:20), punto de encuentro, itinerario y qué incluye.
- [ ] Confirmar la temporada de operación y los días con salida (`tour.booking`).
- [ ] Definir cómo se paga después de confirmar (transferencia, link de pago, efectivo) para responder siempre igual.
- [ ] **Foto para el paso 1 del itinerario** (salida en bus) y, si existe, del desayuno a bordo.
- [ ] Coordenadas de la oficina, localidad exacta y redes sociales (`business.social`, para `sameAs`).
- [ ] Historia real del equipo en *Nosotros* (E-E-A-T).
- [ ] Política de cancelación definitiva en *Términos*.
- [ ] Confirmar si se cobra la entrada a CONAF y si hay guía en inglés.
