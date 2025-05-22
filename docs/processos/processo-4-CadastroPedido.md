### 3.3.4 Processo 4 – Cadastro de Pedidos

<br>Oportunidades de Melhoria<br>

<br>Este processo foi otimizado para:<br>

- Reduzir em 80% erros manuais de digitação

- Automatizar 100% a validação de estoque

- Aumentar a eficiência e rapidez na produção de pedidos


<br>![BPMN Cadastro de Pedidos](nullAinda)<br>


#### Detalhamento das atividades  

  <br>**Iniciar Pedido**<br>

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Tipo de Cliente | Seleção Única    | Varejo/Atacado/Parceria | -  |
| Origem do Pedido| Seleção Única    | Site/WhatsApp/Loja Física |  -  |
| Tipo de Envio   | Seleção Única    | Promocional/Sedex/Retirar na loja |  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Continuar            | Adicionar Itens	  | default |
| Cancelar             | Fim do Processo  | cancel  |  



  <br>**Adicionar Itens (Subprocesso)**<br>

|**Fonte de Dado**| **Métrica Chave**|
| ---             | ---              | 
| Busca de Produtos | Auto-Complete por referência/nome|      
| Validação de Estoque | Verifica disponibilidade em tempo real do estoque |  
| Cálculo do Preço | Aplica descontos por volume automáticamente |  




  <br>**Validar Pagamento**<br>

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Status de Pagamento | Seleção Única	| Pagamento com status "Aprovado" | Em Análise |
| Opções de Parcelamento | Máx. 5x para Alto Atacado | Valor > R$1.499 |  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Confirmar            | Confirmar Pedido               | default  |
| Cancelar             | Revisar Dados                  | cancel   |   




 <br>**Confirmar Pedido**<br>

| **Ação**       | **Automação**        
| ---              | ---                 |
| Número do Pedido | Recebido do Site	(ex.: 12855) |
| Disparo de Produção | Cria tarefas automáticamente de cada processo do pedido |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Finalizar            | Fim do Processo                | default  |
| Editar               | Adicionar Itens/Editar Itens  | cancel   |


