# Design system de referência — Cris Assis

Rota travada: **sombria editorial** (estúdio de tattoo old-school / parede de flash).
Espírito: portfólio de artista premium, foto manda, tipografia grande e seca, um único acento quente.

> Nota de origem: no modo design system (orçamento de 8 min, direção já travada pelo
> coordenador), a régua veio dos três modelos Awwwards abertos na pesquisa — **Oscar Akermo**,
> **Lass Tattoo**, **Monolith Studio** (capturas em `.site-agent/referencias/`), que estão
> acima da média da Refero Styles para este ramo. Abaixo, o DESIGN.md e os Design Tokens no
> mesmo formato da Refero, destilados desses modelos + das decisões travadas. Troque a cor de
> marca pela real da Cris quando houver logo (hoje: vermelho tradicional de tattoo).

---

## DESIGN.md (análise do sistema)

**Caráter.** Escuro, cru, editorial. Preto de parlor do piso ao teto; o único brilho é a pele
tatuada (fotos em cor cheia) e um vermelho óxido de assinatura usado com parcimônia. Sem
cartões arredondados, sem sombras fofas, sem gradientes decorativos — a composição é de revista
de arte, não de landing page.

**Hierarquia.** O nome e os títulos de seção são gigantes, em display condensada caixa-alta
(espírito de lettering de placa de estúdio). O corpo é pequeno, discreto, em sans neutra. O
contraste de escala (display enorme × corpo miúdo) é o que dá o ar caro — é o padrão dos três
modelos (Akermo, Monolith: grotesca bold gigante; Lass: display + microtexto).

**Foto.** Retratos e ambiente em P&B/dessaturado (como nos 3 modelos); a GALERIA quebra a regra
de propósito e vai em **cor cheia** — a tinta tradicional saturada (vermelho/teal/amarelo) é o
pop do site sobre o preto. Fotos de borda viva, escalas variadas em grade editorial assimétrica,
muito respiro.

**Cor como evento.** O vermelho óxido aparece só no traço-cena, no botão principal e em 1-2
destaques. A inversão para **papel creme de flash** (fundo claro) acontece numa só seção
(estilos/flash) para dar textura de folha de flash — é o "momento de cor" controlado.

**Movimento.** Rolagem suave (Lenis); uma linha única "escreve" o nome no hero (stroke-dashoffset
guiado pela rolagem) e reaparece como moldura da galeria e sublinhado das seções. Pelo menos uma
seção presa (pin). Nunca parado, mas nunca espalhafatoso. Tudo degrada sem JS.

**O que evitar (dos modelos e das lições).** Monolith mobile põe texto sob o objeto e fica
ilegível → no celular o nome nunca sobre foto de baixo contraste. Lass tem grandes vazios ao
rolar → aqui cada dobra tem conteúdo. Notorious: banner de cookie cobrindo o hero, azul elétrico
→ proibido. Sem etiqueta caixa-alta acima de cada título, sem 01/02/03, sem trio de cartões com
ícone, sem "não é X, é Y".

---

## Design Tokens

**Cores**
| token | valor | papel |
|---|---|---|
| fundo | `#0B0B0C` | base, quase preto de parlor |
| fundo-2 | `#070708` | seções fundas (galeria) |
| tinta | `#050506` | topo, rodapé, agendar |
| texto | `#EDEAE4` | off-white quente |
| texto-2 | `rgba(237,234,228,.64)` | apoio |
| texto-3 | `rgba(237,234,228,.42)` | legenda/micro |
| linha | `rgba(237,234,228,.14)` | fios/bordas |
| **acento** | `#B23A2E` | **marca** — vermelho óxido tradicional (traço, botão, 1-2 destaques) |
| acento-claro | `#C9483A` | hover/ênfase |
| teal | `#2F6E66` | acento secundário raro |
| papel | `#F5F2EC` | folha de flash (inversão de 1 seção) |
| papel-texto | `#17160F` | texto sobre papel |

**Tipografia**
| token | fonte | uso |
|---|---|---|
| display | **Anton** (Google) | nome, títulos de seção — condensada bold caixa-alta |
| corpo | **Inter** (Google) | parágrafos, nav, botões, legendas |
| script | **Mrs Saint Delafield** (Google) | assinatura "Cris" — 1 a 2 usos no máximo |

Escala: corpo 17px (`--txt-base`, nunca < 16); títulos de seção `clamp(2.8rem→5.5rem)`;
hero `clamp(4rem→12.5rem)`. Entrelinha de título 0.86–0.92; corpo 1.62.

**Espaço/forma**: container 1320px, gutter `clamp(20px→64px)`, seção `clamp(4.5rem→9rem)`.
Cantos vivos (raio 0; foto 2px). Sombras só em fotos elevadas.

**Movimento**: dur 0.25 / 0.5 / 0.9s; ease saída `cubic-bezier(.22,1,.36,1)`;
espessura do traço-cena 2.5px.

Todos os valores vivem em `tokens.css`. Nenhuma seção pode inventar cor, fonte ou espaço fora dele.
