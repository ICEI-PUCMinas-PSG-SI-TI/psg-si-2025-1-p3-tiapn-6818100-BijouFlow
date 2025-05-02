### 3.3.1 Cadastro de Funcionários 

**Oportunidades de Melhoria**

- Este processo foi projetado para:

- Reduzir em 90% os erros de cadastro manual

- Garantir conformidade com políticas de segurança de dados

- Automatizar a distribuição de credenciais

![Fluxo de Cadastro de Funcionários](docs/images/BPMN_CadastroFuncionario.png)




#### Detalhamento das atividades

**Cadastrar Funcionário no Sistema**


| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome Completo | Caixa de Texto  | Obrigatório (min. 5 caracteres)| - |
| CPF | Número | Válido e não cadastrado | - |
| Cargo | Seleção Única   | Operacional/Gerente/ADMIN | - |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Submit             | Cadastro | default |        
| Cancelar            | Fim do proceso de cadastro  | cancel |



**Criar Acesso no Sistema**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Email |	Caixa de Texto	| email@example.com | - |
| Perfil de Acesso |	Seleção Única | Baseado no cargo | - |
| Senha |	Caixa de Texto	| Obrigatório min. 8 caracteres (letras + números e símbolos) | - |


| **Comandos**         |  **Destino**  | **Tipo** |
| ---                  | ---           | ---      |
| Concluir | Logar funcionário |	default |
| Reportar Falta | Alertar Compras	| cancel |
