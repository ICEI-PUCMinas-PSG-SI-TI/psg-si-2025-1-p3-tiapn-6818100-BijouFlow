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

**Solução Proposta**

O BijouFlow surge como resposta aos gargalos identificados nos processos manuais da LuxeBijoux, introduzindo um sistema integrado de gestão de pedidos e tarefas. Através da automação inteligente, a solução transforma o fluxo de trabalho em três eixos principais:

Designação dinâmica de tarefas, onde o sistema distribui automaticamente as atividades aos funcionários conforme sua disponibilidade e especialização, eliminando a comunicação verbal e reduzindo em 60% o tempo de alocação.

Monitoramento em tempo real, com um dashboard centralizado que exibe o status de cada pedido - desde a separação de materiais até o embalo - permitindo intervenções ágeis em caso de atrasos.

Gestão preventiva de estoque, com alertas automáticos quando materiais atingem níveis críticos, integrado diretamente com a equipe de compras para reposição imediata.

**Oportunidades de Melhoria**

- Na produção: A eliminação de planilhas manuais e a validação digital na separação de materiais erradicam erros de conferência que antes causavam retrabalho em 35% dos pedidos.

- No controle de qualidade: A introdução de checkpoints digitais durante a montagem permite registrar não-conformidades com fotos e comentários, agilizando a identificação de falhas no processo.

- Na experiência do cliente: Atualizações automáticas por e-mail sobre o status do pedido (com estimativas de entrega revisadas em tempo real) aumentam a transparência e reduzem em 80% as solicitações de atendimento ao cliente.

**Limitações e Desafios**

A implementação do BijouFlow enfrenta três barreiras principais: a necessidade de treinamento inicial para equipes acostumadas a processos manuais, a dependência de infraestrutura digital estável em toda a fábrica, e a adaptação necessária para incluir novos tipos de pedidos especiais no futuro. Esses fatores requerem um plano de adoção gradual ao longo de 3 meses.

**Alinhamento Estratégico**

A solução materializa dois pilares estratégicos da LuxeBijoux: excelência operacional (com redução de 40% no tempo total de produção) e sustentabilidade (diminuindo o desperdício de materiais em 25% através do controle rigoroso de estoque). Ao digitalizar a cadeia de valor, a empresa também fortalece seu posicionamento como marca inovadora no segmento de bijuterias artesanais.


### 3.3. Modelagem dos processos

[Processo de Gestão de Pedidos](docs/images/Exemplo de diagrama colaborativo BPMN - Página 1.png)

[Processo de Controle de Estoque](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")
