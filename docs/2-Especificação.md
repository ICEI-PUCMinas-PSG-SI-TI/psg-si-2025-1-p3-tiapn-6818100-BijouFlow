# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

**Persona 1: Gerente de Produção**
Thais Gonçalves tem 27 anos e é Gerente de Produção na LuxeBijoux. Formada em Administração de Empresas, Thais é responsável por garantir que todos os pedidos sejam produzidos e entregues dentro do prazo. Ela adora organização e planejamento, mas se frustra com a falta de ferramentas eficientes para gerenciar sua equipe.

Responsabilidades:

- Confirmar pedidos e designar tarefas aos funcionários.

- Acompanhar o progresso dos pedidos em todas as etapas (separação, montagem, conferência e embalo).

- Garantir que os prazos sejam cumpridos e que não haja atrasos na produção.


Necessidades:

- Um sistema que permita visualizar o status de todos os pedidos em tempo real.

- Designar tarefas de forma rápida e eficiente, sem depender de processos manuais.

- Receber alertas sobre falta de materiais para tomar decisões ágeis.


Frustrações:

- Dificuldade em acompanhar o progresso dos pedidos manualmente.

- Falta de visibilidade sobre o estoque de peças, o que causa atrasos na produção.

- Tempo excessivo gasto com processos manuais e comunicação ineficiente.

Thais está em busca de uma solução tecnológica que simplifique sua rotina e aumente a eficiência da equipe.


**Persona 2: Funcionária de Separação**
Ana Luiza tem 23 anos e trabalha como Funcionária de Separação na LuxeBijoux. Ela é responsável por separar as peças necessárias para a montagem das bijuterias, garantindo que tudo esteja pronto para a próxima etapa. Ana é dedicada e gosta de ver seu trabalho contribuindo para o sucesso da empresa, mas se sente sobrecarregada com a falta de ferramentas adequadas.

Responsabilidades:

- Separar as peças necessárias para a montagem das bijuterias de acordo com cada pedido.

- Verificar a disponibilidade de todas as peças antes de passar o pedido para a próxima etapa.


Necessidades:

- Um sistema que permita marcar a tarefa como concluída caso todas as peças estejam disponíveis.

- Marcar como "falta" no status do pedido, indicando quais peças estão em falta e o motivo do atraso.

- Frustrações:

- Dificuldade em comunicar a falta de peças de forma clara e organizada.

- Preocupação com erros na conferência de peças, o que pode causar problemas nas etapas seguintes.

- Falta de integração entre as etapas de produção, o que gera retrabalho.

Ana deseja uma ferramenta que facilite seu trabalho e ajude a evitar erros e atrasos.


**Persona 3: Cliente**
Anna Carolina Moreira tem 32 anos e é uma cliente atacadista de bijuterias personalizadas para revenda. Ela adora trabalhar com peças exclusivas e valoriza a qualidade e o prazo de entrega dos produtos. Anna é uma cliente fiel da LuxeBijoux, mas se sente frustrada com a falta de comunicação sobre o status de seus pedidos.

Perfil:

- Cliente atacadista que compra bijuterias personalizadas para revender em sua loja.

- Valoriza prazos de entrega curtos e comunicação transparente.


Necessidades:

- Acompanhar o status do pedido em tempo real, desde a confirmação até a entrega.

- Receber notificações sobre o progresso do pedido (separação, montagem, conferência e embalo).

- Garantir que o pedido será entregue no prazo combinado.


Frustrações:

- Falta de comunicação clara sobre o status do pedido.

- Dificuldade em saber se há atrasos ou problemas com o pedido.

- Preocupação com a possibilidade de receber pedidos incompletos ou fora do prazo.

Anna está em busca de uma experiência de compra mais transparente e confiável, onde ela possa acompanhar cada etapa do processo sem precisar entrar em contato constantemente com a empresa.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... 'PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Gerente de Produção | Visualizar status dos pedidos, designar tarefas, receber alertas de materiais.| Garantir prazos, reduzir processos manuais, evitar atrasos. |
|Funcionária de Separação | Marcar tarefas como concluídas ou com falta de peças, receber lista de peças. | Evitar erros, agilizar a separação, garantir que o pedido avance corretamente. |
|Cliente | Acompanhar status do pedido, receber notificações, ser informada sobre atrasos. | Ter transparência e confiança no processo de entrega. |
|Equipe de estoque | Receber alertas de falta de materiais, acessar relatórios de consumo. | Evitar interrupções na produção, planejar compras, reduzir desperdícios. |
|Administrador | Alterar permissões, cadastrar usúarios, acessar relatórios de consumo. | Garantir segurança, facilitar a gestão de usuários, melhorar a eficiência. |

## Requisitos

Para a classificação de prioridades de requisitos que serão implementados no sistema, utilizamos a técnica de MoSCoW (Must have, Should have, Could have, Won't have), que classifica os requisitos em Alta, Média e Baixa prioridade.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir o cadastro e autenticação de usuários (gerentes e funcionários). | ALTA | 
|RF-002| O sistema deve permitir que o gerente designe tarefas aos funcionários.  | ALTA |
|RF-003| O sistema deve permitir que os funcionários marquem tarefas como concluídas.  | ALTA |
|RF-004| O sistema deve exibir um dashboard para o gerente acompanhar o progresso dos pedidos. | ALTA |
|RF-005| O sistema deve permitir que o cliente acompanhe o status do pedido. | MÉDIA |
|RF-006| O sistema deve permitir que os funcionários reportem falta de materiais. | ALTA |
|RF-007| O sistema deve enviar alertas automáticos sobre falta de materiais para a equipe de estoque. | MÉDIA |
|RF-008| O sistema deve gerar relatórios detalhados sobre o progresso das tarefas. | MÉDIA |
|RF-009| O sistema deve permitir que o administrador gerencie permissões de acesso dos usuários. | MÉDIA |
|RF-010| O sistema deve exibir um ranking do funcionário que mais separou peças de pedidos no mês. | BAIXA |
|RF-011| O sistema deve exibir um ranking do funcionário que mais montou peças de pedidos no mês. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo e funcionar em dispositivos móveis e desktops. | MÉDIA | 
|RNF-002| O sistema deve ter um tempo de resposta inferior a 4 segundos para todas as operações.| MÉDIA | 
|RNF-003| O sistema deve garantir a segurança dos dados dos usuários, com criptografia de senhas e dados sensíveis. | ALTA | 
|RNF-004| O sistema deve ser capaz de suportar o cadastro de grandes números de usuários. | ALTA | 
|RNF-005| O sistema deve ser escalável para suportar o crescimento da empresa. | MÉDIA | 
|RNF-006| O sistema deve ser de fácil usabilidade, com interface intuitiva para todos os usuários. | ALTA | 
|RNF-007| O sistema deve ser desenvolvido utilizando tecnologias modernas e de fácil manutenção. | MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O sistema deve ser compatível com dispositivos móveis e desktops. |
|03| A solução deve ser escalável para futuras expansões, mas sem custos adicionais iniciais. |
|04| O sistema deve ser desenvolvido em português, com possibilidade de tradução futura. |

