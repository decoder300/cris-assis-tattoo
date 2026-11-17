# Ajustes comuns (depois de cada um, rodar o --montar descrito no CLAUDE.md)

1. **Trocar a foto do topo:** substituir `assets/galeria/work/hero.jpg` (vertical 3:4, ≤400 KB).
2. **Trocar/adicionar trabalhos da galeria:** fotos em `assets/galeria/work/gNN.jpg`; cada `<figure>` em `secoes/galeria.html` tem `data-cat` = `cor`, `black` ou `flash` (é o filtro).
3. **Retrato do "Sobre":** `assets/galeria/work/artist.jpg`; texto em `secoes/sobre.html`.
4. **Nome e morada do estúdio:** bloco "A definir" em `secoes/estudio.html`. Fotos do espaço: `assets/estudio/` (hoje provisórias de banco).
5. **WhatsApp (quando ela confirmar):** em `secoes/agendar.html`, trocar o botão "WhatsApp (a definir)" por `<a class="btn btn--fantasma btn--grande btn--bloco-mob" href="https://wa.me/351XXXXXXXXX?text=...">`.
6. **Cores:** `design-system/tokens.css` — `--cor-fundo` (papel), `--cor-tinta`, `--cor-acento` (vermelho).
7. **Fontes:** link do Google Fonts em `base.html` + `--fonte-display` / `--fonte-script` em tokens.css.
8. **Cena "Do papel à pele":** imagens em `secoes/processo.html` (flash + tatuagem); duração em `secoes/processo.js` (`end: '+=120%'`).
9. **Floreio que se desenha no topo:** forma em `secoes/hero.html` (`.hero__floreio`); velocidade em `secoes/hero.css` (`animation: hero-floreio 1.8s`).
10. **Publicar:** trocar `SITE_URL` em base.html, robots.txt e sitemap.xml; remover `<meta name="robots" content="noindex, nofollow">` de base.html.
