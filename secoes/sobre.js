/* Seção "sobre" — movimento. Não inicia Lenis/GSAP; regista a cena. */
(function () {
  window.cenas = window.cenas || [];
  window.cenas.push(function (gsap, ScrollTrigger, Cena) {
    var sec = document.querySelector('#sobre');
    if (!sec) return;

    // Texto entra (helper do DS). Fallback se o helper não existir.
    if (Cena && typeof Cena.revelar === 'function') {
      Cena.revelar(sec);
    } else if (gsap && ScrollTrigger) {
      gsap.to(sec.querySelectorAll('.aparece'), {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: sec, start: 'top 75%' }
      });
    } else {
      sec.querySelectorAll('.aparece').forEach(function (el) {
        el.style.opacity = 1; el.style.transform = 'none';
      });
    }

    if ((Cena && Cena.reduz) || !gsap || !ScrollTrigger) return;

    // Retrato revela por máscara
    var img = sec.querySelector('.sobre__retrato img');
    if (img) {
      gsap.fromTo(img,
        { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
        { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sobre__retrato', start: 'top 82%' } });
    }

    // "Cris" em script aparece uma vez
    var ass = sec.querySelector('.sobre__assinatura');
    if (ass) {
      gsap.fromTo(ass,
        { opacity: 0, y: 26, rotate: -4 },
        { opacity: 1, y: 0, rotate: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sobre__retrato', start: 'top 58%' } });
    }
  });
})();
