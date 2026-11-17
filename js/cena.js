/* ============================================================
   Cris Assis — Cena global: "o traço que escreve"
   Lenis (rolagem suave) + GSAP ScrollTrigger.
   Conceito: uma linha única desenha o nome e volta como
   moldura/sublinhado ao longo da página.
   As seções registram suas animações em window.cenas[].
   Tudo degrada: sem JS ou com prefers-reduced-motion, mostra pronto.
   ============================================================ */
(function () {
  'use strict';

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var temGSAP = !!(window.gsap && window.ScrollTrigger);

  // Sem GSAP: revela tudo e sai.
  if (!temGSAP) {
    document.querySelectorAll('.aparece').forEach(function (el) {
      el.style.opacity = 1; el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---- Rolagem NATIVA (sem Lenis): mais leve e sem sensação de travar ---- */
  var lenis = null;

  /* ---- Helper global: desenhar um traço SVG guiado pela rolagem ----
     Uso por qualquer seção:
     Cena.desenharTraco(pathEl, { gatilho, inicio, fim, scrub, ponto })  */
  window.Cena = {
    lenis: lenis,
    reduz: reduz,
    desenharTraco: function (path, opts) {
      if (!path) return;
      opts = opts || {};
      var comp = path.getTotalLength();
      path.style.strokeDasharray = comp;
      if (reduz) { path.style.strokeDashoffset = 0; return; }
      path.style.strokeDashoffset = comp;
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: opts.gatilho || path,
          start: opts.inicio || 'top 85%',
          end: opts.fim || 'bottom 55%',
          scrub: true
        }
      });
    },
    // revelação padrão de blocos .aparece dentro de um escopo
    revelar: function (escopo) {
      if (reduz) return;
      (escopo || document).querySelectorAll('.aparece').forEach(function (el) {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
      });
    }
  };

  /* ---- Executa as cenas registradas pelas seções ---- */
  function rodarCenas() {
    (window.cenas || []).forEach(function (fn) {
      try { fn(gsap, ScrollTrigger, window.Cena); }
      catch (e) { console.warn('cena falhou', e); }
    });
    window.Cena.revelar(document);
    ScrollTrigger.refresh();
  }

  if (document.readyState === 'complete') rodarCenas();
  else window.addEventListener('load', rodarCenas);

  // recalibra após fontes carregarem (evita saltos do título display)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
