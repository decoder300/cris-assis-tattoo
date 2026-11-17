/* ============================================================
   Cris Assis — HERO
   Conteúdo sempre visível (nome, foto, botões). Movimento só como
   reforço: parallax leve da foto. Nunca esconde o conteúdo.
   ============================================================ */
window.cenas = window.cenas || [];
window.cenas.push(function (gsap, ScrollTrigger, Cena) {
  var hero = document.getElementById('hero');
  if (!hero || !gsap || Cena.reduz) return;
  var img = hero.querySelector('.hero__foto img');
  if (img) {
    gsap.fromTo(img, { yPercent: -4, scale: 1.06 }, {
      yPercent: 6, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
    });
  }
});
