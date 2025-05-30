## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução

O BijouFlow é uma solução integrada para gestão de pedidos e produção da LuxeBijoux, composta por 4 módulos principais que se comunicam para automatizar processos manuais, garantir rastreabilidade e melhorar a eficiência operacional.

## Módulos e Tecnologias

**Módulo	Tecnologias	Função Principal**

-> Frontend Web	: React.js, Bootstrap	Interface para clientes (rastreio de pedidos) e gerentes (dashboard de produção)

-> Backend	ASP.NET Core (C#) : REST API	Lógica de negócio, integrações e processamento de dados

-> Banco de Dados	MySQL	: Armazenamento de pedidos, tarefas, estoque e histórico

 Inclua um diagrama da solução e descreva os módulos e as tecnologias
 que fazem parte da solução. Discorra sobre o diagrama.
 
 **Exemplo do diagrama de Arquitetura**:
 
 ![Diagrama de Arquitetura](./images/DiagramaArquiteturaBijouFlow.png)
 

### 4.2. Protótipos de telas

O sistema BijouFlow para a resolução de todos os problemas que foram encontrados na empresa LuxeBijoux, foi pensado os seguintes Wireframes iniciais para ser desenvolvido e posteriormente implementados para resolução dos problemas.



*Tela de cadastro*
![Tela de Cadastro](images/Wireframe_TelaCadastro.jpg)



*Tela de login*
![Tela de Login](images/Wireframe_TelaLogin.jpg)



*Home page funcionário logado*
![Tela de Início Funcionário](images/HomePage_Funcionario_BijouFlow.png)



*Tela de tarefas*
![Tela de Tarefas](images/Tela_de_Tarefas_BijouFlow.png)



*Tela de cadastro de pedidos*
![Tela de Cadastro de Pedidos](images/Wireframe_Tela_Cadastro_de_Pedidos.png)



*Tela de cadastro de peças*
![Tela de Cadastro de Peças](images/Wireframe_Tela_Cadastro_Peças.png)



 *Tela de relatórios*
![Tela de Relatórios](images/Wireframe_Tela_Relatorios.png)



## Diagrama de Classes

Diagrama de classes inicial do sistema BijouFlow.

![Diagrama de Classes](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2025-1-p3-tiapn-6818100-BijouFlow/blob/main/docs/images/Diagrama%20de%20Classes%20-%20BijouFLow.png)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)


### 4.3. Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam efetuar os cadastros de dados e controles associados aos processos identificados, assim como recuperações.
Utilizando a notação do DER (Diagrama Entidade e Relacionamento), elaborem um modelo, na ferramenta visual indicada na disciplina, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar, também, o controle de acesso de usuários (partes interessadas dos processos) de acordo com os papéis definidos nos modelos do processo de negócio.
_Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos._

#### 4.3.1 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![Modelo ER](./images/ModeloER.png)

#### 4.3.2 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---


#### 4.3.3 Modelo Físico

Script pra criação da tabela do banco de dados

<code>

CREATE DATABASE bijouflow;
USE bijouflow;

-- Tabela: Cliente
CREATE TABLE Cliente (
    id_usuario CHAR(36) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
);

-- Tabela: Gerente
CREATE TABLE Gerente (
    id_gerente CHAR(36) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Tabela: Departamento
CREATE TABLE Departamento (
    id_departamento CHAR(36) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_gerente CHAR(36) NOT NULL,
    FOREIGN KEY (id_gerente) REFERENCES Gerente(id_gerente)
);

-- Tabela: Funcionario
CREATE TABLE Funcionario (
    id_funcionario CHAR(36) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    id_departamento CHAR(36) NOT NULL,
    contratado BOOLEAN,
    FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento)
);

-- Tabela: Fornecedor
CREATE TABLE Fornecedor (
    id_fornecedor CHAR(36) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    contato VARCHAR(100)
);

-- Tabela: Pedido
CREATE TABLE Pedido (
    id_pedido CHAR(36) PRIMARY KEY,
    id_cliente CHAR(36) NOT NULL,
    data TIMESTAMP,
    status VARCHAR(50),
    valor_total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_usuario)
);

-- Tabela: Produto
CREATE TABLE Produto (
    id_produto CHAR(36) PRIMARY KEY,
    id_pedido CHAR(36) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2),
    nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
);

-- Tabela: Material
CREATE TABLE Material (
    id_material CHAR(36) PRIMARY KEY,
    id_produto CHAR(36) NOT NULL, 
    id_fornecedor CHAR(36) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    quantidade_estoque INT,
    estoque_minimo INT,
    FOREIGN KEY (id_produto) REFERENCES Produto(id_produto),
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor)
);

-- Tabela: Tarefa
CREATE TABLE Tarefa (
    id_tarefa CHAR(36) PRIMARY KEY,
    id_pedido CHAR(36) NOT NULL, 
    tipo VARCHAR(50),
    status VARCHAR(50),
    data_inicio TIMESTAMP,
    data_conclusao TIMESTAMP,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
);

-- Tabela de Junção para Funcionario (N) executa (M) Tarefa
CREATE TABLE Funcionario_Executa_Tarefa (
    id_funcionario CHAR(36) NOT NULL,
    id_tarefa CHAR(36) NOT NULL,
    PRIMARY KEY (id_funcionario, id_tarefa),
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario),
    FOREIGN KEY (id_tarefa) REFERENCES Tarefa(id_tarefa)
);

</code>

Este script deverá ser incluído em um arquivo .sql na pasta src\bd.




### 4.4. Tecnologias

_Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas._

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | MySQL           |
| Front end      | HTML+CSS+JS     |
| Back end       | Java SpringBoot |
| Deploy         | Github Pages    |

