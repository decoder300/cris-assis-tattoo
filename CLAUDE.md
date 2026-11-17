# Site da Cris Assis — como está organizado

Portfólio de uma página da tatuadora Cris Assis (Lisboa, @crisassistattoo). Pegada retrô: papel creme, tinta preta, vermelho retrô, serifa de letreiro (Fraunces) e script raro (Pinyon Script).

## Estrutura
- `index.html` — página FINAL (gerada). Não editar à mão.
- `base.html` — esqueleto (head, cabeçalho, rodapé, scripts) com marcadores `<!-- secao:ID -->`.
- `secoes/ID.html|.css|.js` — cada seção: hero, microinfo, galeria, processo, estilos, sobre, estudio, agendar.
- `design-system/tokens.css` — cores, fontes, tamanhos. `componentes.css` — classes partilhadas.
- `js/cena.js` — Lenis + GSAP/ScrollTrigger; cada seção regista a sua animação em `window.cenas`.
- `assets/galeria/work/` — fotos reais dela (já comprimidas, ≤400 KB). Originais: `C:/dev/cris-assis-originais/`.

## Depois de editar qualquer seção, monte de novo
```
node C:\dev\agente-criar-site\skills\criar-site\ao-vivo.mjs C:\dev\cris-assis-tattoo --montar
```
Prévia ao vivo (recarrega a cada gravação): `node ...\ao-vivo.mjs C:\dev\cris-assis-tattoo 8200` → http://localhost:8200

## Regras
- Só fotos reais da Cris nas tatuagens. Nunca tatuagem de banco.
- Nada inventado: estúdio, morada, preço e WhatsApp ficam "a definir" até ela confirmar.
- Agendamento: DM do Instagram (`https://ig.me/m/crisassistattoo`).
- Antes de publicar: trocar `SITE_URL` (base.html, robots.txt, sitemap.xml) e tirar o `noindex` do base.html.
