### 3.3.2 Processo 3 – Geração de Relatórios

Oportunidades de Melhoria
Este processo foi otimizado para:

Reduzir em 85% o tempo manual de compilação de dados

Garantir precisão com fontes de dados centralizadas

Oferecer flexibilidade na exportação e visualização

![BPMN Geração de Relatórios]([https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-BijouFlow/blob/main/docs/images/BPMN...GerarRelatório.png?raw=true](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-BijouFlow/blob/main/docs/images/BPMN...GerarRelatório.jpeg?raw=true)))


#### Detalhamento das atividades


**Solicitar Relatório**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Período         | Data e Hora   | Formato: dd-mm-aaaa até dd-mm-aaaa | -  |
| Granularidade	  | Seleção Única   | Diário/Mensal/Total |  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Gerar               | Processar Dados	 | default |
| Cancelar            | Fim do Processo  | cancel  |


**Coletar dados(Subprocesso Automatizado)**

|**Fonte de Dado**| **Métrica Chave**|
| ---             | ---              | 
| tarefas         | Quantidade concluída por funcionário |      
| pedidos         | Tempo médio por etapa de produção    |  
| estoque         | Materiais repostos vs. consumidos    |  
| financeiro      | Gastos por categoria (R$)            |  

**Emissão do Relatório**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Visualização    | Seleção Única	| Gráfico/Tabela/Combinado | -  |
| Formato de Exportação	  | Seleção Múltipla  | PDF/Excel/CSV |  -  |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---      |
| Exportar             | Entregar Relatório e Fim do processo | default |
| Cancelar             | Fim do Processo | cancel |
