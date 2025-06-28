document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede recarregamento

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const cpf = document.getElementById("cpf").value;
        const cargo = document.getElementById("cargo").value;

        const dia = document.getElementById("diaNasc").value.padStart(2, '0');
        const mes = document.getElementById("mesNasc").value.padStart(2, '0');
        const ano = document.getElementById("anoNasc").value;

        const dataNascimento = ${ano}-${mes}-${dia};

        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("senha", senha);
        formData.append("cpf", cpf);
        formData.append("cargo", cargo);
        formData.append("dataNascimento", dataNascimento); // ISO format

        try {
            const response = await fetch("http://localhost:5182//Funcionario", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const erro = await response.text();
                throw new Error("Erro ao cadastrar funcionário: " + erro);
            }

            const funcionario = await response.json();
            alert("Funcionário cadastrado com sucesso! ID: " + funcionario.funcionarioId);
            form.reset();

        } catch (error) {
            console.error("Erro:", error);
            alert("Não foi possível cadastrar. Verifique os dados e tente novamente.");
        }
    });
});