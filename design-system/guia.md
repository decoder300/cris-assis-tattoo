# Guia do design system — Cris Assis (para os construtores de seção)

Leia antes de escrever sua seção. Use **só** os tokens (`tokens.css`) e as classes
(`componentes.css`). Cor nova, fonte nova ou espaçamento solto = proibido; se faltar algo,
anote em `.site-agent/pedidos-ds.md` (não invente).

## Regras de ouro
- Idioma: **português de Portugal**. Direto, natural, voz da artista. Sem narrador
  ("é aqui que", "pode reparar", "segundo o Instagram"), sem descrever a foto, sem piada,
  sem "não é X, é Y", sem etiqueta caixa-alta acima do título, sem 01/02/03.
- **Todo bloco tem título + texto curto** (fato + ganho para o cliente).
- **Nunca inventar fato**: nome do estúdio, morada, preço, telefone, anos de carreira =
  campo "A DEFINIR" visível com `.micro`/estilo próprio, ou fica de fora. Só é confirmado:
  nome (Cris Assis), Lisboa, @crisassistattoo, DM como canal, agenda "Available", que ela
  também pinta, estilos (tradicional/old-school/neo-tradicional/blackwork/flash).
- **Fotos**: prévia usa banco licença livre (Pexels/Unsplash), nítidas, mesma luz entre si,
  cada `<figure>` com `<span class="ilustrativa">imagem ilustrativa</span>` e registro em
  `.site-agent/creditos.md`. Slot pronto para trocar pela foto real. Sem criança, sem cliente
  identificável em destaque, sem marca de terceiros.
  - Galeria = **cor cheia** (`.foto--cor`). Retrato e ambiente = **P&B** (`.foto--pb`).
- **Ação principal** sempre a DM: `https://ig.me/m/crisassistattoo` (link real no HTML).
  WhatsApp fica como 2º botão pronto porém `aria-disabled="true"` com rótulo "WhatsApp (a definir)".
- Mobile-first: botões `.btn--bloco` no celular, nada espremido, galeria ótima no telemóvel.
- Técnico: `overflow-x: clip` já está no body; respeite `@media print`; não inicie Lenis/GSAP —
  registre a animação em `window.cenas`.

## Classes principais (exemplos)
```html
<!-- seção -->
<section id="estudio" class="secao secao--funda">
  <div class="container"> ... </div>
</section>

<!-- título de seção (sem kicker acima) -->
<h2 class="titulo-secao">O estúdio</h2>

<!-- lead + corpo -->
<p class="lead">Agenda aberta em Lisboa.</p>
<p class="corpo">Texto curto, fato + ganho.</p>

<!-- botões -->
<a class="btn btn--primario" href="https://ig.me/m/crisassistattoo" target="_blank" rel="noopener">Marcar no Instagram</a>
<a class="btn btn--fantasma" href="#galeria">Ver trabalhos</a>
<a class="btn btn--fantasma" aria-disabled="true">WhatsApp (a definir)</a>

<!-- selo de agenda -->
<p class="selo"><span class="selo__ponto"></span> Agenda aberta</p>

<!-- foto com nota ilustrativa -->
<figure class="foto foto--cor">
  <img src="assets/galeria/01.webp" width="800" height="1000" loading="lazy" alt="Tatuagem neo-tradicional a cores no antebraço">
  <span class="ilustrativa">imagem ilustrativa</span>
  <figcaption class="legenda">Neo-tradicional · antebraço</figcaption>
</figure>

<!-- grade editorial -->
<div class="grade grade--12"> ... itens com grid-column ... </div>

<!-- micro-rótulo de canto / "A DEFINIR" -->
<span class="micro">A definir · morada em Lisboa</span>

<!-- bloco que entra com movimento -->
<div class="aparece"> ... </div>
```

## Conceito de cena: "o traço que escreve"
Uma linha única (SVG, `stroke-dashoffset`) é a agulha: ela **desenha o nome CRIS ASSIS** no
hero conforme a rolagem, com um ponto de tinta na ponta. Depois a mesma linha **volta** como
moldura das fotos da galeria (no meio) e como **sublinhado** dos títulos de seção (no fim).
CSS + SVG + GSAP ScrollTrigger + Lenis, **sem 3D**. Respeita `prefers-reduced-motion` (mostra o
traço já pronto) e sem JS tudo aparece. **Pelo menos uma seção presa (pin).** Site nunca parado.

Como registrar a cena da sua seção (não inicie GSAP sozinho):
```js
window.cenas = window.cenas || [];
cenas.push(function (gsap, ScrollTrigger, Cena) {
  // desenhar um traço guiado pela rolagem:
  Cena.desenharTraco(document.querySelector('#galeria .traco-moldura path'), {
    gatilho: '#galeria', inicio: 'top 70%', fim: 'bottom 60%', scrub: 0.6
  });
  // animações próprias aqui; use Cena.reduz para pular quando necessário
});
```
Helpers globais: `Cena.desenharTraco(path, opts)`, `Cena.revelar(escopo)`, `Cena.lenis`, `Cena.reduz`.

## Roteiro de rolagem (seção a seção)
1. **hero** — o traço escreve "CRIS ASSIS" (SVG) enquanto a foto de fundo faz um leve parallax;
   subtítulo "Tatuadora · Lisboa" e botão entram por baixo. Microinfo nos cantos (como Akermo).
2. **microinfo** — faixa fina fixa/entra: Lisboa · agenda "Available" · @crisassistattoo. O traço
   do hero "escorre" para baixo ligando ao bloco.
3. **galeria (coração, PIN)** — **seção presa**: a parede de flash se monta peça por peça / as
   fotos entram por máscara (clip-path) de dentro de uma linha desenhada; filtro por estilo troca
   a cena sem sair do pin. Fotos em cor cheia. É o momento mais forte.
4. **estilos** — fundo **papel creme** (inversão): lista editorial, 1 foto por linha, cada linha
   sublinhada pelo traço que se desenha ao entrar.
5. **sobre** — retrato P&B que revela por máscara; "Cris" em script aparece uma vez; texto curto.
6. **estudio** — ambiente P&B; bloco "A DEFINIR" (nome/morada) com estilo próprio; leve parallax.
7. **agendar** — fundo tinta; título grande, o traço fecha como um círculo/sublinhado sob o botão
   "Marcar pelo Instagram"; passos simples. Clímax da ação.

## Fundos das seções (emenda entre elas)
hero `--cor-fundo` → microinfo `--cor-tinta` (faixa) → galeria `secao--funda` → estilos
`secao--papel` (quebra clara) → sobre `--cor-fundo` → estudio `secao--funda` → agendar
`secao--tinta`. O montador confere as transições.
