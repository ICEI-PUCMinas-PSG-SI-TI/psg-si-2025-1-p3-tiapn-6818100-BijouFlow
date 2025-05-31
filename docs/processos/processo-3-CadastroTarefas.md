### 3.3.3 Processo 3 – Cadastro de Tarefas Para Funcionários

<br>Oportunidades de Melhoria<br>

<br>Este processo foi otimizado para:<br>

- Reduzir em 75% o tempo de alocação manual

- Balancear automáticamente a carga de trabalho

- Garantir rastreabilidade completa das atribuições


![Cadastro de Tarefas](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-BijouFlow/blob/main/docs/images/cadastro-de-tarefas.png?raw=true)


#### Detalhamento das atividades  

  <br>**Identificar Necessidade**<br>

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Tipo de Tarefa  | Seleção Única    | Separação/Montagem/Conferência | -  |
| Prazo	          | Data e Hora      | Deve ser futuro |  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Continuar            | Selecionar Funcionário	 | default |
| Cancelar             | Fim do Processo  | cancel  |  




  <br>**Selecionar Funcionário (Subprocesso Automatizado)**<br>

|**Fonte de Dado**| **Métrica Chave**|
| ---             | ---              | 
| Disponibilidade | Funcionário com < 5 tarefas pendentes|      
| Responsabilidade | Funcionário que seja do cargo responsável pela tarefa|  




  <br>**Confirmar Atribuição**<br>

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Funcionário    | Seleção Única	| Lista com os funcionários respectivos e disponíveis para tarefa | -  |
| Prioridade  | Seleção Única  | Baixa/Média/Urgente |  -  |
| Observações | Área de Texto  | Máx. 1000 caracteres|  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Confirmar            | Atribuir Tarefa ao Funcionário | default |
| Reatribuir           | Selecionar Funcionário         | cancel |  




 <br>**Atribuir Tarefa**<br>

| **Método**       | **Gatilho**         | **Restrições** |
| ---              | ---                 | ---            | 
| Notificação Push | Imediato ao Confirmar	| "Nova tarefa: [tipo] - Prazo: [data]" |  


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Finalizar            | Fim do Processo                | default  |
| Reenviar             | Confirmar Atribuição           | cancel   |



