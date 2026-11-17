/* Seção estilos — movimento registado na cena global.
   Não inicia Lenis/GSAP: só empurra para window.cenas. */
window.cenas = window.cenas || [];
window.cenas.push(function (gsap, ScrollTrigger, Cena) {
  var escopo = document.querySelector('#estilos');
  if (!escopo) return;

  // Cada linha: traço-sublinhado desenhado ao rolar + foto revelada por máscara.
  var linhas = escopo.querySelectorAll('.estilo, .estilos__pintura');
  linhas.forEach(function (linha) {
    var path = linha.querySelector('.traco-estilo');
    if (path && Cena && Cena.desenharTraco) {
      Cena.desenharTraco(path, {
        gatilho: linha,
        inicio: 'top 82%',
        fim: 'top 42%',
        scrub: true
      });
    }

    if (Cena && Cena.reduz) return; // reduced-motion: fica tudo visível
    var foto = linha.querySelector('.foto');
    if (!foto) return;
    gsap.fromTo(foto,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: linha, start: 'top 80%' }
      }
    );
  });
});
