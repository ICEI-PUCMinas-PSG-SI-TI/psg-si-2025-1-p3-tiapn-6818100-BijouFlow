## 3. Modelagem dos Processos de Negócio

Atualmente, a empresa de bijuterias utiliza processos manuais para a designação de tarefas para os funcionários e na falta de materiais para montagem do pedido. Isso inclui listas de pedidos em papel, comunicação verbal entre funcionários e gerentes, e acompanhamento manual do status dos pedidos. Esse processo é propenso a erros, como desorganização de tarefas para os funcionários, atrasos na produção e desperdício de materiais. Estes processos feitos de forma manual trazem consigo problemas que estão relacionados com a falta de visibilidade sobre o status dos pedidos, dificuldade do gerente de designar tarefas de forma eficiente, erros frequentes na separação das bijuterias, a comunicação ineficiente entre a gerente e os funcionários e o atraso na fabricação das peças.


### 3.1. Modelagem da situação atual (Modelagem AS IS)

Atualmente, o processo de gestão de tarefas e pedidos na LuxeBijoux é realizado de forma manual, sem o uso de sistemas automatizados. O fluxo de trabalho é o seguinte:

**Recebimento do Pedido:**

- O pedido é recebido via site.

- O gerente confirma o pagamento.

**Designação de Tarefas:**

- O gerente designa as tarefas (separação, montagem, conferência e embalo) verbalmente ou por meio de anotações.

- As tarefas são repassadas aos funcionários, que precisam se organizar para executá-las.

**Execução das Tarefas:**

- O funcionário responsável pela separação verifica manualmente a disponibilidade das peças.

- Caso haja falta de materiais, o funcionário informa o gerente, que precisa entrar em contato com o fornecedor.

- Após a separação, o pedido é encaminhado para a montagem, conferência e embalo, com cada etapa sendo registrada manualmente.

**Acompanhamento do Progresso:**

- O gerente acompanha o progresso dos pedidos por meio de planilhas ou anotações, o que torna o processo lento e propenso a erros.

- Não há visibilidade em tempo real do status dos pedidos, o que dificulta a tomada de decisões ágeis.

**Finalização e Entrega:**

- Após a conclusão de todas as etapas, o pedido é enviado ao cliente.

- O cliente não tem acesso ao status do pedido e depende de contatos manuais para obter informações.

**Problemas Identificados**
- Falta de Automação: O processo é totalmente manual, o que consome tempo e recursos.

- Falta de Visibilidade: Não há uma visão clara do progresso dos pedidos em tempo real.

- Comunicação Ineficiente: A comunicação entre gerentes, funcionários e fornecedores é lenta e propensa a erros.

- Desperdício de Materiais: A falta de controle sobre o estoque resulta em desperdícios e atrasos na produção.


**Modelagem BPMN(AS IS)**

![Modelagem BPMN(AS IS)](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-grupo-4-1/blob/main/docs/images/96bf92c7-6ff2-40e6-b455-d6f096c29b78.jpg)


### 3.2. Descrição geral da proposta (Modelagem TO BE)

O BijouFlow é um sistema de gestão de tarefas e pedidos desenvolvido para eliminar os gargalos identificados no modelo AS-IS da LuxeBijoux. Por meio da automação de processos, integração em tempo real e visibilidade completa do fluxo de produção, a solução oferece:

Designação inteligente de tarefas com base nas capacidades da equipe

Monitoramento em tempo real do status de pedidos

Alertas automatizados para falta de materiais

Relatórios de desempenho por etapa do processo

Oportunidades de Melhoria por Processo
1. Gestão de Pedidos
Melhoria	Impacto Esperado
Automação da designação	Redução de 60% no tempo de alocação de tarefas
Dashboard integrado	Visibilidade imediata do status (100% digital)
Validação automática	Eliminação de erros manuais na separação
2. Controle de Estoque
Melhoria	Impacto Esperado
Alertas em tempo real	Redução de 30% nos atrasos por falta de materiais
Integração com compras	Tempo de reposição 50% mais rápido
Limites da Solução
Dependência de infraestrutura: Requer conexão estável à internet

Curva de aprendizado: Necessidade de treinamento inicial para equipe

Customização limitada: Adaptação necessária para outros segmentos além de bijuterias

Alinhamento com Objetivos do Negócio
Estratégia da LuxeBijoux	Como o BijouFlow Atende
Redução de atrasos	Prazos de produção 40% mais curtos
Melhoria na experiência	Clientes recebem atualizações automáticas
Sustentabilidade	Redução de 25% no desperdício de materiais


_Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias._

### 3.3. Modelagem dos processos

[PROCESSO 1 - Nome do Processo](./processos/processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Nome do Processo](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")
