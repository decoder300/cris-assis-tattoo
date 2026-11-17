/* Do papel à pele: a foto da tatuagem revela-se sobre o flash com a rolagem.
   Computador: seção presa curta. Celular: sem prender (revela enquanto passa). */
window.cenas = window.cenas || [];
window.cenas.push(function (gsap, ScrollTrigger, Cena) {
  var sec = document.getElementById('processo');
  if (!sec || !gsap || !ScrollTrigger || Cena.reduz) return;
  var pele = sec.querySelector('.processo__fig--pele');
  var palco = sec.querySelector('.processo__palco');
  var imagens = sec.querySelector('.processo__imagens');
  if (!pele || !palco || !imagens) return;

  sec.classList.add('cena-on');
  var celular = window.matchMedia('(max-width: 860px)').matches;

  var st = celular
    ? { trigger: imagens, start: 'top 75%', end: 'bottom 45%', scrub: true }
    : { trigger: palco, start: 'top top', end: '+=70%', scrub: true, pin: true, anticipatePin: 1, invalidateOnRefresh: true };

  gsap.fromTo(pele,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: st });
});
