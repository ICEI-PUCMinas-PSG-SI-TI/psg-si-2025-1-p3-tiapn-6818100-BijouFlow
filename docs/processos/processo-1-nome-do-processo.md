### 3.3.1 Processo 1 – NOME DO PROCESSO

_Apresente aqui o nome e as oportunidades de melhoria para o processo 1. 
Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN._

![Fluxo de Gestão de Pedidos]([[docs/imagens/bpmn_processo1.png](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-grupo-4-1/edit/main/docs/processos/processo-1-nome-do-processo.md)](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-grupo-4-1/blob/06077e5ac2641c7b46f18d7b31a364678aad16a2/docs/images/Exemplo%20de%20diagrama%20colaborativo%20BPMN%20-%20P%C3%A1gina%201.png))


#### Detalhamento das atividades

**Cadastrar Pedido no Sistema**


| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Número do Pedido | Número  | Automático(sequencial) | -                 |
| Nome do Cliente | Caixa de Texto   | Obrigatório, Mínimo 3 caracteres | - |
| Contato do Cliente | Caixa de Texto   | formato (XX) XXXXX-XXXX | -     |
| Itens do Pedido | Tabela | Colunas: Código, Descrição, Qtd | -          |
| Prazo de Entrega | Data | Deve ser futura | Data atual + 8 dias |
| Anexos | Arquivo | Formatos: PDF, JPG, PNG | - |



| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Salvar              | Designar Tarefas | default |        
| Cancelar            | Fim do proceso de cadastro  | cancel |



**Designar Tarefas Automáticas**


| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Funcionário | Seleção Única | Lista de funcionários ativos |  -  |
| Prioridade | Seleção Única | Alta/Média/Baixa | - |
| Observações | Área de Texto	|	Máx. 500 caracteres | - |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Confirmar | Verificar Estoque | default |
| Rejeitar | Revisar Dados do Pedido | cancel |




**Verificar Estoque (Subprocesso)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Código do Material |	Número	| Deve existir no cadastro | - |
| Quantidade Necessária |	Número | > 0 | - |
| Status Disponibilidade |	Seleção Única	| Disponível/Em Falta/Parcial | - |


| **Comandos**         |  **Destino**  | **Tipo**          |
| ---                  | ---                            | ---               |
| Continuar | Tarefa de Separação|	default |
| Reportar Falta | Alertar Compras	| cancel |



**Tarefa de Separação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Materiais Separados	 |	Seleção Múltipla | Lista de itens do pedido | - |
| Hora de Início | Hora | Formato 24h | - |
| Hora de Término	|	Hora | > Hora de Início | - |


| **Comandos**         |  **Destino**  | **Tipo**          |
| ---                  | ---                            | ---               |
| Concluir | Montagem |	default |
| Reportar Problema	| Revisar Separação | cancel |



**Atualizar Dashboard**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Status do Pedido | Seleção Única | Em Andamento/Concluído/Atrasado | - |
| Última Atualização | Data e Hora | Automático | - |
| Responsável |	Caixa de Texto | Preenchimento automático | - |


| **Comandos**         |  **Destino**  | **Tipo**          |
| ---                  | ---                            | ---               |
| Finalizar | Fim do Processo |	default |
| Editar | Revisar Pedido | cancel |
