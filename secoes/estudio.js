/* Seção "estudio" — movimento. Registra na cena global; não inicia GSAP/Lenis. */
window.cenas = window.cenas || [];
window.cenas.push(function (gsap, ScrollTrigger, Cena) {
  var escopo = document.querySelector('#estudio');
  if (!escopo) return;

  // revela os blocos .aparece desta seção (se o helper existir)
  if (Cena && typeof Cena.revelar === 'function') Cena.revelar('#estudio');

  // respeita prefers-reduced-motion: deixa tudo parado e visível
  if (Cena && Cena.reduz) return;

  // parallax leve na foto do interior
  var img = escopo.querySelector('.estudio-parallax img');
  if (img && gsap && ScrollTrigger) {
    gsap.set(img, { scale: 1.14 });
    gsap.to(img, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.estudio-parallax',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }
});
