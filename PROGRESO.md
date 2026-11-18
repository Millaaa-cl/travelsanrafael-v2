# Progreso del proyecto: Costa Carrera Travel (travelsanrafael.cl)

Última actualización: 18 de noviembre de 2026

> **Esta carpeta es la versión 2** (`C:\Users\holam\travelsanrafael-v2`): las reservas se envían por WhatsApp, sin Flow ni backend. La versión 1 con Flow sigue en `C:\Users\holam\travelsanrafael`. El historial de abajo es compartido hasta la sección "Versión 2".

## 18 de noviembre: versión 2, reservas por WhatsApp

- **Qué se hizo:** se clonó el proyecto en una carpeta aparte, con su propio repositorio: github.com/Millaaa-cl/travelsanrafael-v2.
- **Widget:**
  - el calendario genera las fechas en el navegador desde `tour.booking` (temporada septiembre a abril, todos los días, desde mañana, 12 meses);
  - el total se calcula con los precios de `tour.ts`;
  - "Reservar por WhatsApp $X" abre `wa.me` con fecha, pasajeros, total estimado y los datos del cliente, en ES o EN;
  - el correo pasa a ser opcional.
- **Eliminado:** `public/api/`, `public/admin/`, `sql/`, las páginas de pago confirmado o fallido, y las reglas de `api/` en `.htaccess` y `robots.txt`.
- **Textos:** se quitó toda mención a Flow:
  - ítem de confianza "Reserva directa";
  - FAQ "¿Cómo reservo y pago?";
  - footer;
  - meta descriptions;
  - `llms.txt`;
  - términos (la reserva se confirma por WhatsApp y con el pago acordado).
- **Verificado:** build y auditoría sin advertencias (23 páginas). Con Edge vía CDP, en escritorio (home ES) y en móvil (tour EN), el calendario muestra los días, 2 adultos + 1 niño suman $460.000, el mensaje de WhatsApp sale completo y no hay desborde horizontal.
- **Publicación automática (18-11):** GitHub Actions (`.github/workflows/deploy.yml`) publica por FTPS en la carpeta de travelsanrafael.cl en cada push a `main`. La primera publicación salió bien: el sitio nuevo reemplazó al WordPress (respaldado por el usuario). Error encontrado: `421 Home directory not available`, porque cPanel había agregado `/deploy` al directorio de la cuenta FTP.
- **Pendiente v2:**
  - confirmar la temporada y los días con salida;
  - definir cómo se paga tras confirmar por chat.

## 17 de noviembre: sitio nuevo y rediseño

### 1. Sitio nuevo completo
- Sitio estático en **Astro**, bilingüe: español en `/` e inglés en `/en/`, con 27 páginas:
  - inicio y ficha del tour;
  - cómo llegar, preguntas frecuentes, nosotros, contacto y términos;
  - 3 artículos de blog por idioma;
  - páginas de reserva confirmada y de pago fallido.
- **SEO, GEO y AEO:**
  - JSON-LD de agencia, tour, oferta, FAQ, migas de pan y artículos;
  - hreflang, sitemap, `robots.txt` y `/llms.txt`;
  - redirecciones 301 desde las URLs del WordPress antiguo.
- **Reservas en línea:**
  - calendario con cupos reales y pago con **Flow.cl**;
  - backend PHP + MySQL en el mismo hosting cPanel;
  - panel `/admin/` para reservas y salidas;
  - correos de confirmación.
- **Datos reales del tour:**
  - salida a las 06:20 desde la esquina de Dagoberto Godoy con Exploradores;
  - regreso entre las 17:00 y las 18:00;
  - itinerario completo;
  - 17 fotos propias optimizadas.

### 2. Rediseño del front-end ("Ola y glaciar")
- Hecho con la skill oficial `frontend-design` de Anthropic.
- **Marca:** Costa Carrera Travel, con logo en el header y favicon nuevo.
- **Paleta del logo:**
  - negro `#1d1d1b`;
  - rojo `#d7262b`, solo para reservar;
  - turquesa `#2fb3c3` y `#137f8c`;
  - hielo `#eaf6f8`.
- **Tipografía:** Archivo, con títulos condensados que recuerdan al "TRAVEL" del logo.
- **Interacción propia en cada sección:**
  - olas animadas;
  - contadores;
  - itinerario que se dibuja al hacer scroll;
  - checks animados;
  - parallax;
  - galería con visor;
  - carrusel de reseñas;
  - FAQ animadas;
  - barra de reserva en móvil.

### 3. Correcciones
- **Collage y fotos que no aparecían:** el revelado con `clip-path` al 100 % impedía que el navegador las detectara y cargara. Se cambió por un fundido con zoom.
- **Calendario vacío en "Elige la fecha":** ahora siempre se dibuja el mes, con el aviso y el enlace a WhatsApp si el backend no responde.
- **Íconos descuadrados en Contacto:** ahora van en círculos de 44 px, y todos los íconos tienen un tamaño base de 24 px.

### 4. Control de versiones
- Se instaló Git y se subió a GitHub: https://github.com/Millaaa-cl/costacarreratravel (rama `main`).
- Commits: `6ba85a2` (sitio) y `5cd5ff1` (este archivo).

## 18 de noviembre: tarifas, logo, cupón de descuento y fotos

Commit `363e6d5`.

### 1. Tarifas definitivas
- **$170.000 por adulto y $120.000 por niño de hasta 12 años.** Están en `tour.ts`: `priceFromCLP`, `priceChildCLP` y `childMaxAge`.
- El sitio ahora dice **"por adulto"** en lugar de "por persona" en el hero, el widget, los datos clave y la barra móvil.
- El widget muestra una franja con la tarifa de niños.
- **Textos actualizados en ES y EN:**
  - el resumen;
  - la tabla de información práctica;
  - las FAQ "¿Cuánto cuesta?" y "¿Pueden ir niños?", que antes decía "consultar por WhatsApp";
  - las meta descriptions;
  - `llms.txt`.
- **JSON-LD con dos ofertas:** Adulto y Niño.
- **Panel `/admin/`:** el formulario de salidas en lote trae 170.000 y 120.000 por defecto.

### 2. Logo transparente
- El SVG del cliente no es vectorial: es un PNG de 960×740 embebido con una máscara y pesa 466 KB.
- Se convirtió a PNG transparente recortado, en dos versiones:
  - `logo-costa-carrera-travel.png` (239×186, 42 KB) para el header;
  - `-600.png` para el JSON-LD. Antes Google recibía el favicon como logo.

### 3. Cupón de descuento (`Promo.astro`)
- Va justo después de la franja de datos clave, en el inicio y en la ficha del tour.
- **Diseño:**
  - tarjeta azul `#408dde` con forma de cupón, con línea punteada y muescas;
  - título "¡Tu aventura merece un descuento! 🎁".
- **Botón "Quiero mi descuento":**
  - verde `#9fed8b` y late con un halo;
  - abre WhatsApp con un mensaje ya escrito para consultar descuentos.
- **Animaciones:**
  - el regalo se sacude;
  - un brillo cruza la tarjeta.
- **Video:**
  - en bucle, sin sonido, del grupo brindando frente al glaciar (`public/videos/`, 354 KB, con portada);
  - se pausa fuera de la pantalla y con "reducir movimiento".

### 4. Fotos nuevas (20)
- **Collage:** nueva foto principal, la lancha frente al hielo azul.
- **Itinerario:**
  - el paso 2 ahora tiene foto, el puerto de embarque;
  - fotos nuevas en los pasos 3, 4 y 5.
- **Nuestra embarcación:** la lancha con pasajeros y el interior de la cabina con los chalecos de la marca.
- **Otras secciones:**
  - reseñas: el guía saludando;
  - FAQ: pasajeros con la bandera chilena;
  - banda de la frase: la panorámica del glaciar;
  - cierre: témpano frente al glaciar.
- **Galería:** pasó de 12 a 21 fotos. Las fotos verticales tienen punto de enfoque (`pos`) para que el recorte muestre lo importante.

### 5. Footer
- Sellos de certificación: **Confianza Turística**, **Turismo Sustentable** y **Servicio Turístico Registrado SERNATUR**.
- Descripción nueva que menciona Chile: "Navegamos desde Puerto Río Tranquilo hasta el Glaciar San Rafael, en el Campo de Hielo Norte. Una aventura de día completo en la Región de Aysén, Patagonia, Chile."

## Decisiones tomadas

| Decisión | Motivo |
|---|---|
| Astro estático + PHP/MySQL en cPanel | El hosting no tiene Node. Se sube `dist/` a `public_html` y el backend corre allí mismo. |
| Pago con Flow.cl | Lo eligió el cliente: Webpay, tarjetas y transferencia en Chile. |
| Español + inglés, con slugs distintos por idioma | Público nacional y extranjero, y mejor SEO en cada idioma. |
| Los precios cobrados salen de la base de datos (`departures`) | El servidor recalcula el total y nunca confía en el navegador. `tour.ts` solo define el precio que se muestra: al cambiar el precio, hay que actualizar ambos. |
| "Por adulto" en vez de "por persona", y "Adulto" en vez de "desde" en la barra móvil | Con tarifa de niños, "por persona" y "desde $170.000" ya no eran correctos. |
| Cupos apartados 20 minutos mientras se paga | Evita la sobreventa. Si el pago no se completa, los cupos se liberan solos. |
| Marca: **Costa Carrera Travel**, dominio travelsanrafael.cl | Confirmada por el cliente. Coincide con el logo. |
| Tipografía Archivo y solo fotos propias | Supuestos por defecto, porque esas preguntas quedaron sin respuesta. |
| Logo como PNG transparente generado desde el SVG | El SVG pesa 466 KB porque es una imagen embebida. El PNG del header pesa 42 KB y se ve nítido en pantallas de alta resolución. |
| Header siempre blanco y nombre en texto en el footer | Las letras del logo son negras y no se leerían sobre la foto del hero ni sobre el footer negro. |
| Animaciones en JS propio (~5 KB), sin GSAP ni AOS | Menos peso. Todo respeta `prefers-reduced-motion` y el contenido se ve sin JS. |
| Descartados: cursor personalizado y partículas | Afectan el rendimiento y la accesibilidad. |
| Video en autoplay solo en el cupón, por pedido del cliente | Corto (menos de 3 s, 354 KB), sin sonido, en bucle, y se pausa fuera de pantalla y con "reducir movimiento". |
| Cupón azul `#408dde` y botón verde `#9fed8b` | Colores pedidos por el cliente, fuera de la paleta del logo. Los textos van grandes y en negrita para mantener el contraste sobre el azul. |
| Fotos de WhatsApp reducidas a 1200 px (1600 px las de ancho completo) | Mismo tamaño que el resto del sitio, para que la página cargue rápido. |
| Galería con 3n + 3 fotos (12, 15, 18, 21…) | Así la grilla queda completa en escritorio y en móvil. |
| Zip con `tar -a` en vez de Compress-Archive | Compress-Archive usa `\` en las rutas y rompe la extracción en cPanel. |
| `.gitignore` excluye `config.php` y `tsr-config.php` | Esos archivos guardan claves de la base y de Flow, y no deben ir a GitHub. |

## Pendiente

### Contenido (lo entrega el cliente; buscar `TODO` en el código)
- [x] Tarifas: $170.000 adulto y $120.000 niño hasta 12 años (18-11-2026).
- [x] Logo transparente (18-11-2026).
- [x] Foto del paso 2 del itinerario (puerto de embarque).
- [ ] **Definir qué descuentos se ofrecen**, para responder cuando escriban por el cupón.
- [ ] Confirmar si el sello **Confianza Turística (COVID-19)** sigue vigente. Si no, se quita del footer.
- [ ] Confirmar la temporada de operación. Hoy dice "septiembre a abril".
- [ ] Confirmar si se cobra la entrada a CONAF y si hay guía en inglés.
- [ ] Foto del paso 1 del itinerario (salida en bus) y, si hay, del desayuno a bordo.
- [ ] Coordenadas de la oficina, redes sociales y razón social.
- [ ] Historia real del equipo en *Nosotros*.
- [ ] Política de cancelación definitiva en *Términos*.
- [ ] Opcional: logo en SVG vectorial real, y una versión en blanco para fondos oscuros.

### Puesta en marcha (pasos detallados en README.md)
- [ ] Respaldar el WordPress actual (archivos y base de datos).
- [ ] Crear la base MySQL e importar `sql/schema.sql`.
- [ ] Crear el correo `reservas@travelsanrafael.cl`.
- [ ] Crear `/home/USUARIO/tsr-config.php` con los datos de la base, Flow y correo, y `sandbox => true`.
- [ ] Subir `travelsanrafael-public_html.zip` a `public_html` y extraerlo.
- [ ] Elegir PHP 8.1 o superior, con `pdo_mysql` y `curl`.
- [ ] Crear el administrador en `/admin/setup.php` y luego **borrar ese archivo**.
- [ ] Crear las salidas de la temporada en `/admin/`: 20 cupos, $170.000 adulto y $120.000 niño.
- [ ] Probar en el sandbox de Flow un pago aprobado, uno rechazado y uno abandonado.
- [ ] Pasar Flow a producción y hacer una compra real de bajo monto.
- [ ] Search Console y Bing: enviar `sitemap-index.xml`.
- [ ] Revisar los datos estructurados en el Rich Results Test.
- [ ] Google Business Profile con el mismo nombre, dirección y teléfono.

### No verificado todavía
- Reserva completa con pago real: necesita el hosting con MySQL y el sandbox de Flow.
- Calendario con fechas reales seleccionables.
- Fluidez de las animaciones con scroll real, incluido el cupón: el latido del botón, el brillo y el video.
- Safari y celulares físicos. Solo se revisó con capturas de Edge a 1440, 768 y 390 px.

## Siguiente paso

**v2:** subir `costacarrera-v2-PRUEBA.zip` a un subdominio de prueba (no necesita base de datos) y hacer una reserva de prueba desde un celular para ver que llega bien a WhatsApp. Luego confirmar la temporada y los días con salida en `tour.booking`. Las listas de "Puesta en marcha" y "No verificado" de arriba corresponden a la v1 con Flow.

**v1:** instalar el sitio en el hosting y probar una reserva en el sandbox de Flow, siguiendo el README de la v1.

Mientras tanto, conviene definir los descuentos del cupón y pedir al cliente la temporada confirmada.

## Cómo retomar

```powershell
cd C:\Users\holam\travelsanrafael-v2
npm.cmd run dev        # vista previa en http://localhost:4321
npm.cmd run package    # build + auditoría SEO + costacarrera-v2-public_html.zip
git add -A; git commit -m "mensaje"; git push   # repo: github.com/Millaaa-cl/travelsanrafael-v2
```
