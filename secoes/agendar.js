/* ============================================================
   Seção: agendar — registro da cena.
   AQUI A LINHA SE FECHA: o traço vira sublinhado/laço sob o
   botão "Marcar pelo Instagram", encerrando o traço-cena.
   Não inicia Lenis/GSAP — só empurra para window.cenas.
   ============================================================ */
window.cenas = window.cenas || [];
window.cenas.push(function (gsap, ScrollTrigger, Cena) {
  var escopo = document.querySelector('#agendar');
  if (!escopo) return;

  // revela topo, passos e ação ao entrar
  if (Cena && typeof Cena.revelar === 'function') {
    Cena.revelar(escopo);
  }

  // o traço FECHA aqui: desenha o sublinhado/laço sob o botão principal
  var traco = escopo.querySelector('.agendar__traco path');
  if (traco && Cena && typeof Cena.desenharTraco === 'function') {
    Cena.desenharTraco(traco, {
      gatilho: '#agendar .agendar__acao',
      inicio: 'top 82%',
      fim: 'top 42%',
      scrub: true
    });
  }
});
