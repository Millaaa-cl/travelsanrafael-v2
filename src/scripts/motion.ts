/**
 * Movimiento e interacciones del sitio (vanilla, sin dependencias).
 * - Todo el contenido es visible sin JS; la clase .js (puesta en <head>) activa los estados iniciales.
 * - Con prefers-reduced-motion se muestra todo de inmediato y no se anima nada.
 */
const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
(window as any).__motion = true;
if (reduce) root.classList.add('no-motion');

/* ---------- Revelado al entrar en pantalla ---------- */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal], [data-checks], [data-count]');
const onEnter = (el: HTMLElement) => {
  el.classList.add('is-in');
  if (el.dataset.count !== undefined) countUp(el);
};
if (reduce || !('IntersectionObserver' in window)) {
  revealables.forEach(onEnter);
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { onEnter(e.target as HTMLElement); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 });
  revealables.forEach((el) => io.observe(el));
}
// Escalonado: cada hijo de [data-stagger] recibe su índice
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((p) => {
  Array.from(p.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i)));
});
document.querySelectorAll<HTMLElement>('[data-checks] li').forEach((li) => {
  const list = li.parentElement!;
  li.style.setProperty('--i', String(Array.from(list.children).indexOf(li)));
});

/* ---------- Contadores ---------- */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!target || reduce) return;
  const fmt = (n: number) => (el.dataset.format === 'clp' ? '$' + Math.round(n).toLocaleString('es-CL') : String(Math.round(n)).padStart(el.dataset.pad ? Number(el.dataset.pad) : 0, '0'));
  const start = performance.now(), dur = 1200;
  const tick = (t: number) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = fmt(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Scroll: progreso, header, CTA móvil, ruta del itinerario, parallax ---------- */
const progress = document.querySelector<HTMLElement>('.progress');
const header = document.querySelector<HTMLElement>('.site-header');
const mobileCta = document.querySelector<HTMLElement>('.mobile-cta');
const booking = document.getElementById('reservar');
// Si esta página tiene el widget (home y ficha del tour), los botones "Reservar" que apuntan a otra página
// (header, barra móvil, CTA final) bajan directo al widget en vez de cambiar de página.
if (booking) {
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#reservar"]').forEach((a) => {
    if (new URL(a.href, location.href).pathname !== location.pathname) a.setAttribute('href', '#reservar');
  });
}
const hero = document.querySelector<HTMLElement>('.hero, .page-hero');
const routes = Array.from(document.querySelectorAll<HTMLElement>('.route'));
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const canParallax = !reduce && window.matchMedia('(min-width: 768px)').matches;
let ticking = false;

function onScroll() {
  ticking = false;
  const y = window.scrollY, vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  progress?.style.setProperty('--p', String(max > 0 ? y / max : 0));
  header?.classList.toggle('is-scrolled', y > 24);
  if (mobileCta) {
    // Se oculta mientras el widget de reserva está en pantalla: ahí sobra y taparía el resumen y el botón de pago
    const bk = booking?.getBoundingClientRect();
    const inBooking = !!bk && bk.top < vh && bk.bottom > 0;
    mobileCta.classList.toggle('is-visible', (!hero || y > hero.offsetHeight * 0.7) && !inBooking);
  }
  if (!reduce) {
    routes.forEach((r) => {
      const b = r.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.6 - b.top) / b.height));
      r.style.setProperty('--p', p.toFixed(3));
      r.querySelectorAll<HTMLElement>(':scope > li').forEach((li) => {
        li.classList.toggle('is-active', li.getBoundingClientRect().top < vh * 0.6);
      });
    });
  }
  if (canParallax) {
    parallax.forEach((el) => {
      const b = el.getBoundingClientRect();
      if (b.bottom < 0 || b.top > vh) return;
      const k = (b.top + b.height / 2 - vh / 2) / vh; // -1..1
      el.querySelector<HTMLElement>('img')?.style.setProperty('--py', `${(k * -60).toFixed(1)}px`);
    });
  }
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();
if (reduce) routes.forEach((r) => r.querySelectorAll('li').forEach((li) => li.classList.add('is-active')));

/* ---------- Lightbox de la galería ---------- */
const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
const items = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-lightbox]'));
if (dialog && items.length) {
  const img = dialog.querySelector('img')!, cap = dialog.querySelector('figcaption')!;
  let idx = 0, opener: HTMLElement | null = null;
  const show = (i: number) => {
    idx = (i + items.length) % items.length;
    const it = items[idx];
    img.src = it.dataset.lightbox!; img.alt = it.dataset.alt || ''; cap.textContent = it.dataset.alt || '';
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
  };
  items.forEach((b, i) => b.addEventListener('click', () => { opener = b; show(i); dialog.showModal(); }));
  dialog.querySelector('.lightbox__prev')?.addEventListener('click', () => show(idx - 1));
  dialog.querySelector('.lightbox__next')?.addEventListener('click', () => show(idx + 1));
  dialog.querySelector('.lightbox__close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
  dialog.addEventListener('close', () => opener?.focus());
  // Swipe en móvil
  let sx = 0;
  dialog.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  dialog.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); });
}

/* ---------- Carrusel de reseñas: flechas y arrastre con mouse ---------- */
document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((track) => {
  const step = () => (track.firstElementChild as HTMLElement)?.offsetWidth + 16 || 300;
  const nav = track.parentElement?.querySelector('.carousel-nav');
  nav?.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
  nav?.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
  let down = false, x0 = 0, s0 = 0;
  track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; x0 = e.clientX; s0 = track.scrollLeft; track.classList.add('is-dragging'); });
  window.addEventListener('pointerup', () => { if (down) { down = false; track.classList.remove('is-dragging'); } });
  track.addEventListener('pointermove', (e) => { if (down) track.scrollLeft = s0 - (e.clientX - x0); });
});

/* ---------- FAQ y acordeón del kayak: apertura y cierre animados ----------
   En el acordeón (.acc) los <details> comparten "name": sin JS el navegador ya abre uno a la vez.
   Con JS se quita "name" (si no, el navegador cerraría el otro de golpe) y se cierra el abierto con animación. */
const bodyOf = (d: HTMLDetailsElement) => d.querySelector<HTMLElement>(':scope > .faq__body, :scope > .acc__body');
const closeAnimated = (d: HTMLDetailsElement) => {
  const body = bodyOf(d);
  if (!body) { d.open = false; return; }
  body.animate([{ height: body.scrollHeight + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 300, easing: 'ease' }).onfinish = () => { d.open = false; };
};
document.querySelectorAll<HTMLDetailsElement>('.faq details, .acc details').forEach((d) => {
  const summary = d.querySelector('summary')!;
  const body = bodyOf(d);
  if (!body || reduce) return;
  const group = d.getAttribute('name');
  const siblings = group ? Array.from(document.querySelectorAll<HTMLDetailsElement>(`details[name="${group}"]`)) : [];
  queueMicrotask(() => d.removeAttribute('name'));
  summary.addEventListener('click', (e) => {
    e.preventDefault();
    if (d.open) {
      closeAnimated(d);
    } else {
      siblings.forEach((o) => { if (o !== d && o.open) closeAnimated(o); });
      d.open = true;
      const h = body.scrollHeight;
      body.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 350, easing: 'cubic-bezier(.22,.8,.2,1)' });
    }
  });
});
// Un enlace a un <details> del acordeón (p. ej. "Ver itinerario" → #bitacora) lo abre al llegar.
const openTarget = (hash: string) => {
  const el = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (el instanceof HTMLDetailsElement && !el.open) el.querySelector('summary')?.click();
};
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest?.('a[href^="#"]');
  if (a) openTarget(a.getAttribute('href')!);
});
openTarget(location.hash);
