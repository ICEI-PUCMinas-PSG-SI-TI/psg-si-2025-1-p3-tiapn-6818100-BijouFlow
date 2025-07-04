document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastroPedido");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede envio padrÃ£o

        const formData = new FormData();

        // Cliente
        formData.append("clienteNome", document.getElementById("clienteNome").value);
        formData.append("clienteCpf", document.getElementById("clienteCpf").value);
        formData.append("clienteDataNasc", document.getElementById("clienteDataNasc").value);
        formData.append("clienteTelefone", document.getElementById("clienteTelefone").value);
        formData.append("clienteTipo", document.getElementById("clienteTipo").value);
        formData.append("clienteEmail", document.getElementById("clienteEmail").value);
        formData.append("clienteRua", document.getElementById("clienteRua").value);
        formData.append("clienteNumero", document.getElementById("clienteNumero").value);
        formData.append("clienteBairro", document.getElementById("clienteBairro").value);
        formData.append("clienteCep", document.getElementById("clienteCep").value);
        formData.append("clienteCidade", document.getElementById("clienteCidade").value);
        formData.append("clienteUf", document.getElementById("clienteUf").value);

        // Pedido
        formData.append("numeroPedido", document.getElementById("pedidoId").value.replace("#", ""));
        formData.append("tipoEnvio", document.getElementById("pedidoTipoEnvio").value);
        formData.append("status", document.getElementById("pedidoStatus").value);

        try {
            const response = await fetch("http://localhost:5182/bijouflow/Pedido", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const erro = await response.text();
                throw new Error("Erro ao salvar pedido: " + erro);
            }

            const novoPedido = await response.json();

            alert("Pedido salvo com sucesso! ID: " + novoPedido.pedidoId);
            form.reset();

        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
            alert("Falha ao salvar pedido. Verifique os dados e tente novamente.");
        }
    });

    // Popular UF (estados brasileiros)
    const ufSelect = document.getElementById("clienteUf");
    const ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
                 "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
                 "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
    ufs.forEach(uf => {
        const option = document.createElement("option");
        option.value = uf;
        option.textContent = uf;
        ufSelect.appendChild(option);
    });
});