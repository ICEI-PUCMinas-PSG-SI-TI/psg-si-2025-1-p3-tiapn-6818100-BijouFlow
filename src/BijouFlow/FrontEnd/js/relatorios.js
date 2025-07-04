document.getElementById("btnGerarRelatorio").addEventListener("click", async () => {
    const dataInicial = document.getElementById("dataInicial").value;
    const dataFinal = document.getElementById("dataFinal").value;

    if (!dataInicial || !dataFinal) 
        {
        alert("Preencha as datas corretamente.");
        return;
    }

    const filtro = {
        dataInicio: dataInicial,
        dataFim: dataFinal
    };

    try {
        const response = await fetch("http://localhost:5182/bijouflow/Relatorio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filtro)
        });

        if (!response.ok) {
            const erro = await response.text();
            throw new Error(erro, "Erro ao gerar relatório.");
        }

        const dadosRelatorio = await response.json();

        // Exibir os dados no console ou atualizar a tela
        console.log("Relatório recebido:", dadosRelatorio);
        alert("Relatório gerado com sucesso! Veja no console.");

        // Aqui você pode popular a tela com os dados recebidos
        // Exemplo: document.getElementById("campoTarefas").innerText = dadosRelatorio.tarefasConcluidas;

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro ao gerar relatório: " + erro.message);
    }
});