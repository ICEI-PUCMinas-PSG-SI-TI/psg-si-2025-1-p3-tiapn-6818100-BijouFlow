### 3.3.3 Processo 3 – Cadastro de Tarefas Para Funcionários

Oportunidades de Melhoria
Este processo foi otimizado para:

Reduzir em 75% o tempo de alocação manual

Balancear automáticamente a carga de trabalho

Garantir rastreabilidade completa das atribuições

![BPMN Cadastro de Tarefas para Funcionários](nullAinda)


#### Detalhamento das atividades


**Identificar Necessidade**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Tipo de Tarefa  | Seleção Única    | Separação/Montagem/Conferência | -  |
| Prazo	          | Data e Hora      | Deve ser futuro |  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Continuar            | Selecionar Funcionário	 | default |
| Cancelar             | Fim do Processo  | cancel  |


**Selecionar Funcionário (Subprocesso Automatizado)**

|**Fonte de Dado**| **Métrica Chave**|
| ---             | ---              | 
| Disponibilidade | Funcionário com < 5 tarefas pendentes|      
| Responsabilidade | Funcionário que seja do cargo responsável pela tarefa|   


**Confirmar Atribuição**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Funcionário    | Seleção Única	| Lista com os funcionários respectivos e disponíveis para tarefa | -  |
| Prioridade  | Seleção Única  | Baixa/Média/Urgente |  -  |
| Observações | Área de Texto  | Máx. 1000 caracteres|  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Confirmar            | Atribuir Tarefa ao Funcionário | default |
| Reatribuir           | Selecionar Funcionário         | cancel |


**Atribuir Tarefa**

| **Método**       | **Gatilho**         | **Restrições** |
| ---              | ---                 | ---            | 
| Notificação Push | Imediato ao Confirmar	| "Nova tarefa: [tipo] - Prazo: [data]" |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Finalizar            | Fim do Processo                | default  |
| Reenviar             | Confirmar Atribuição           | cancel   |


