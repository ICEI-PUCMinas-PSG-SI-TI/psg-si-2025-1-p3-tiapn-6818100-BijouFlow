document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastroPeca");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const formData = new FormData();

        // Captura os valores dos campos
        formData.append("referencia", document.getElementById("referencia").value);
        formData.append("nome", document.getElementById("nomePeca").value);
        formData.append("categoria", document.getElementById("categoria").value);
        formData.append("peso", document.getElementById("peso").value);
        formData.append("descricaoCompleta", document.getElementById("descricaoCompleta").value);
        formData.append("valorVenda", document.getElementById("valorVenda").value);
        formData.append("desconto", document.getElementById("desconto").value);
        formData.append("quantidadeEstoque", document.getElementById("quantidadeEstoque").value);
        formData.append("imagemPeca", document.getElementById("imagemPeca").value);

        try {
            const response = await fetch("http://localhost:5182/Peca", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const erro = await response.text();
                throw new Error("Erro ao cadastrar peça: " + erro);
            }

            const novaPeca = await response.json();

            alert("Peça cadastrada com sucesso! ID: " + novaPeca.pecaId);
            form.reset(); // Limpa os campos do formulário

        } catch (error) {
            console.error("Erro ao cadastrar peça:", error);
            alert("Erro ao cadastrar peça. Verifique os campos e tente novamente.");
        }
    });
});