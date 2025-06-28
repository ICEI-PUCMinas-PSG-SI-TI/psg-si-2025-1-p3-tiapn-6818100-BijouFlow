document.addEventListener("DOMContentLoaded", async () => {
    const statusMap = {
        "Separacao": "Separação",
        "Montagem": "Montagem",
        "Concluido": "Concluído/Enviado",
        "AguardandoMaterial": "Aguardando Material"
    };

    const colunas = {
        "Separacao": document.querySelector(".kanban-column:nth-child(1)"),
        "Montagem": document.querySelector(".kanban-column:nth-child(2)"),
        "Concluido": document.querySelector(".kanban-column:nth-child(3)"),
        "AguardandoMaterial": document.querySelector(".kanban-column:nth-child(4)")
    };

    try {
        const response = await fetch("http://localhost:5182/Tarefa");

        if (!response.ok) {
            throw new Error("Erro ao buscar tarefas.");
        }

        const tarefas = await response.json();

        tarefas.forEach(tarefa => {
            const card = document.createElement("div");
            card.classList.add("kanban-card");

            card.innerHTML = 
                <p class="pedido-id">Pedido #${tarefas.pedidoId}</p>
                <p class="data">Data: ${new Date(tarefas.dataAtribuicao).toLocaleDateString()}</p>
                <p>${tarefas.descricao}</p>
            ;

            const status = tarefa.status;

            if (colunas[status]) {
                colunas[status].appendChild(card);
            }
        });

    } catch (erro) {
        console.error("Erro ao carregar tarefas:", erro);
        alert("Erro ao carregar tarefas. Verifique o console.");
    }
});
