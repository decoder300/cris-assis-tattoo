/* ============================================================
   microinfo.js — hora local real de Lisboa + entrada da faixa
   Hora calculada via Intl (Europe/Lisbon). Não inventa nada.
   Animação registrada em window.cenas (não inicia Lenis/GSAP).
   ============================================================ */
(function () {
  // ---- hora local real de Lisboa (atualiza a cada 30s) ----
  var alvo = document.querySelector('#microinfo [data-hora-lisboa]');
  if (alvo) {
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat('pt-PT', {
        timeZone: 'Europe/Lisbon',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    } catch (e) { fmt = null; }

    function pintarHora() {
      if (!fmt) { if (alvo.parentNode) alvo.parentNode.remove(); return; }
      try {
        alvo.textContent = fmt.format(new Date()) + ' em Lisboa';
      } catch (e) { /* mantém o placeholder */ }
    }
    pintarHora();
    setInterval(pintarHora, 30000);
  }

  // ---- entrada da faixa + traço (via cena global) ----
  window.cenas = window.cenas || [];
  window.cenas.push(function (gsap, ScrollTrigger, Cena) {
    var faixa = document.querySelector('#microinfo .microinfo__faixa');
    var traco = document.querySelector('#microinfo .microinfo__traco path');

    // itens deslizam lateral ao entrar (usa classes CSS, nada escondido sem JS)
    if (faixa && !(Cena && Cena.reduz)) {
      ScrollTrigger.create({
        trigger: '#microinfo',
        start: 'top 85%',
        once: true,
        onEnter: function () { faixa.classList.add('is-dentro'); }
      });
    } else if (faixa) {
      faixa.classList.add('is-dentro');
    }

    // o traço do hero "escorre" e atravessa a faixa ligando à galeria
    if (traco && Cena && typeof Cena.desenharTraco === 'function') {
      Cena.desenharTraco(traco, {
        gatilho: '#microinfo',
        inicio: 'top 80%',
        fim: 'bottom 55%',
        scrub: true
      });
    } else if (traco) {
      traco.style.strokeDashoffset = '0';
    }
  });
})();
