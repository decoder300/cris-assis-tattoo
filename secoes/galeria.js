/* Galeria: filtro por estilo, lightbox e entrada ao rolar. Independente de GSAP. */
(function () {
  function init() {
    var sec = document.getElementById('galeria');
    if (!sec) return;
    var grade = document.getElementById('galeria-grade');
    var itens = Array.prototype.slice.call(grade.querySelectorAll('.galeria__item'));
    var filtros = Array.prototype.slice.call(sec.querySelectorAll('.galeria__filtro'));
    var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- entrada ao rolar ---- */
    if (reduz || !('IntersectionObserver' in window)) {
      itens.forEach(function (f) { f.classList.add('is-dentro'); });
    } else {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-dentro'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      itens.forEach(function (f) { io.observe(f); });
    }

    /* ---- filtro ---- */
    filtros.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filtro');
        filtros.forEach(function (b) { b.classList.toggle('is-ativo', b === btn); });
        itens.forEach(function (it) {
          var mostra = (f === 'tudo' || it.getAttribute('data-cat') === f);
          it.classList.toggle('is-fora', !mostra);
          if (mostra && !it.classList.contains('is-dentro')) it.classList.add('is-dentro');
        });
      });
    });

    /* ---- lightbox ---- */
    var lb = document.getElementById('galeria-lb');
    var lbImg = document.getElementById('galeria-lb-img');
    var lbCap = document.getElementById('galeria-lb-cap');
    var btnFechar = lb.querySelector('.galeria__lb-fechar');
    var btnAnt = lb.querySelector('.galeria__lb-ant');
    var btnProx = lb.querySelector('.galeria__lb-prox');
    var atual = -1;

    function visiveis() { return itens.filter(function (it) { return !it.classList.contains('is-fora'); }); }
    function abrir(it) {
      var vis = visiveis(); atual = vis.indexOf(it);
      mostrar(it);
      lb.classList.add('is-aberto'); lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; btnFechar.focus();
    }
    function mostrar(it) {
      var img = it.querySelector('img');
      var cap = it.querySelector('.legenda');
      lbImg.src = img.getAttribute('src');
      lbImg.alt = img.getAttribute('alt') || '';
      lbCap.textContent = cap ? cap.textContent : '';
    }
    function fechar() {
      lb.classList.remove('is-aberto'); lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; lbImg.src = '';
    }
    function passo(d) {
      var vis = visiveis(); if (!vis.length) return;
      atual = (atual + d + vis.length) % vis.length; mostrar(vis[atual]);
    }

    itens.forEach(function (it) {
      it.addEventListener('click', function () { abrir(it); });
      it.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(it); }
      });
    });
    btnFechar.addEventListener('click', fechar);
    btnAnt.addEventListener('click', function () { passo(-1); });
    btnProx.addEventListener('click', function () { passo(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) fechar(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-aberto')) return;
      if (e.key === 'Escape') fechar();
      else if (e.key === 'ArrowLeft') passo(-1);
      else if (e.key === 'ArrowRight') passo(1);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
