(Adicione novas anotações sempre que houver decisões, dúvidas ou aprendizados relevantes!)

---

### 14/12/2025 — Configuração de PWA e Ícones

**Resumo:**
- Adicionado o arquivo `manifest.json` para transformar o app em PWA.
- Incluídas as tags necessárias no `<head>` do `index.html` para manifest, theme-color e modo standalone.
- Criados ícones simples (192x192 e 512x512) via terminal usando ImageMagick, para uso como ícones do app e favicon.
- O favicon do Vite foi substituído pelo ícone 192x192.
- Testada a presença do botão de instalação PWA no navegador desktop.
- Decisão: adiar o teste de instalação para depois do deploy, garantindo que o atalho criado aponte para o endereço público do app.

**Comando para criar ícones (exemplo):**
```bash
convert -size 192x192 canvas:yellow -fill black -draw "circle 96,96 96,40" public/icon-192.png
convert -size 512x512 canvas:yellow -fill black -draw "circle 256,256 256,100" public/icon-512.png
```

**Observação:**
O conceito de instalação PWA vale tanto para mobile quanto para desktop. O atalho criado localmente aponta para o localhost; após o deploy, o atalho apontará para o domínio público.

---

### Sobre o componente StatusBox (13/12/2025)

O componente `StatusBox` exibe o status do consumo atual: total consumido nas últimas 36h, destaque visual se o limite foi ultrapassado, ícone de sucesso ou alerta e o tempo restante para reset da janela.
Recebe como props o total, se está acima do limite, a porcentagem, a entrada mais antiga e a função de formatação do tempo restante.
Foca na apresentação do status, mantendo-se genérico e reutilizável.

**Pontos de atenção ao analisar:**
- Como o total e o limite são apresentados visualmente.
- O destaque e feedback ao ultrapassar o limite.
- O uso de props para manter o componente desacoplado da lógica principal.

# NOTAS.md

Este arquivo serve para registrar anotações didáticas, decisões de arquitetura, procedimentos e aprendizados durante o desenvolvimento e refatoração do projeto Beer Tracker.

---

## 13/12/2025 — Início da Modularização

**Motivação:**
- Facilitar o entendimento do código, já que o projeto foi inicialmente gerado por IA.
- Melhorar a manutenção e preparar para futuras expansões.

**Plano de Modularização:**
- Dividir o componente principal (`App.jsx`) em componentes menores e reutilizáveis.
- Componentes planejados:
  - `EntryList`: lista de entradas de consumo e ações relacionadas.
  - `ProgressBar`: barra de progresso visual do consumo.
  - `StatusBox`: exibe o status atual (total, limite, ícones, etc).

**Próximos passos:**
1. Criar os componentes acima em arquivos separados.
2. Refatorar `App.jsx` para utilizar esses componentes.
3. Registrar aprendizados e decisões importantes neste arquivo.

---

(Adicione novas anotações sempre que houver decisões, dúvidas ou aprendizados relevantes!)

---

### Sobre o componente EntryList (13/12/2025)

O componente `EntryList` é responsável por exibir o histórico de entradas de consumo de cerveja.
Mostra cada entrada com quantidade, data/hora e permite remover individualmente.
Destaca visualmente entradas expiradas (após 36h) e oferece botão para limpar todas as expiradas.

**Pontos de atenção ao analisar:**
- Como as entradas são renderizadas e diferenciadas entre ativas/expiradas.
- A interação dos botões de remoção individual e limpeza em massa.
- O uso das props para manter o componente desacoplado da lógica principal.

---

### Sobre o componente ProgressBar (13/12/2025)

O componente `ProgressBar` é responsável por exibir visualmente o progresso do consumo em relação ao limite de 700ml.
Recebe como props a porcentagem de consumo e se o limite foi ultrapassado, alterando a cor da barra conforme a situação.
Utiliza transições para suavizar a animação e é totalmente desacoplado da lógica de cálculo, focando apenas na apresentação visual.

**Pontos de atenção ao analisar:**
- Como a largura e cor da barra mudam conforme o consumo.
- O uso de transições para animação.
- O componente é puramente visual e não contém lógica de negócio.
