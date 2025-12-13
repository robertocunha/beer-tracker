
# CONTEXTO.md

Este arquivo existe para fornecer contexto detalhado ao assistente de IA sobre o projeto "Beer Tracker". Use este documento como referência para entender o propósito, requisitos e decisões do app, facilitando respostas e sugestões alinhadas ao objetivo do projeto.

---

## Objetivo Geral

- O Beer Tracker é um app criado para fins de entretenimento e aprendizado pessoal.
- O objetivo principal é ajudar o usuário a seguir uma regra própria: não consumir mais de 700 ml de cerveja em um período de 36 horas.
- O app pode futuramente ser incluído em um portfólio, então organização e limpeza no código são importantes.
- O app será tornado público (ex: deploy na Vercel), mas não visa uso por terceiros.

## Funcionalidade Básica

- O usuário registra o consumo de cerveja (em ml) usando botões para quantidades comuns (200 ml, 350 ml, 600 ml).
- Ao registrar consumo, inicia-se um timer de 36 horas. O usuário pode consumir até 700 ml nesse período.
- Após 36 horas do primeiro consumo, o contador é resetado e o usuário pode consumir novamente até 700 ml.
- O app serve mais como lembrete/registro do que como ferramenta de monitoramento ativo (não há alertas ou alarmes obrigatórios).
- Se o usuário ultrapassar o limite, apenas um feedback visual simples é necessário (cor, destaque, etc.).
- O app deve permitir inserir valores acima do limite, apenas sinalizando visualmente.

## Requisitos Técnicos

- O app deve funcionar como PWA, podendo ser instalado na tela inicial do celular.
- Implementar o máximo possível de características de PWA, para fins didáticos (ex: funcionamento offline, splash screen, etc.).
- O estado/histórico do consumo deve ser persistido mesmo após fechar o navegador (ex: localStorage, IndexedDB, etc.).
- O código deve ser organizado e preparado para futuras expansões, como uma seção de estatísticas.
- Internacionalização não é obrigatória, mas se possível, deixar o código preparado para facilitar tradução no futuro.

## Estatísticas Futuras (desejadas)

- Visualizar as vezes em que o limite foi quebrado (por mês, ano, fins de semana, etc.).
- Outras estatísticas podem ser adicionadas conforme o projeto evoluir.

## Design e Privacidade

- Não há preferência visual definida (minimalista, divertido, etc.).
- Não há preocupação real com privacidade, mas simulação de boas práticas pode ser interessante para aprendizado.

---

Este arquivo pode ser atualizado a qualquer momento para refletir novas decisões, ideias ou requisitos.
