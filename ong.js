document.getElementById(formAdocao) .addEventListener("submit", function (e) {
    e.preventDeFault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("CPF").value;
    let idade = document.getElementById("idade").value;
    let moradia = document.getElementById("moradia").value;
    let animal = document.getElementById("animal").selectedIndex;
    let motivo = document.querySelector("textarea").value;
    let termo = document.getElementById("opcao").checked;
    let quintal = document.querySelector("quintal");
    let pet = document.querySelector("pet");

    if (idade < 18) return alert("Você deve ter 18 anos ou mais");

    if (moradia === "Casa" && !quintal) {
        return alert("Informe se o quintal é seguro");
    }

    if (moradia === "Apartamento") {
        let permite = confirm("O local permite animais?");
        if (!permite) return alert("Não é possível prosseguir sem permissão");
    }

    if (moradia === "Casa" && quintal && quintal.value === "sim") {
        let seguro = confirm("O quintal é seguro?");
        if (!seguro) return alert("O quintal precisa ser seguro");
    }

    if (animal === 0) return alert("Informe o tempo que o animal ficará sozinho");
    if (animal >= 5) {
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if (!justificativa || justificativa.length < 5) {
            return alert("Justificativa obrigatória");
        }
    }

    if (motivo.length < 10) {
        return alert("Motivo deve ter no mínimo 10 caracteres");
    }
  
    if (motivo.toLowerCase().includes("não tenho dinheiro")) {
        return alert("Condição financeira insuficiente");
    }

    if (termo) {
        return alert("Você deve aceitar o termo de responsabilidade");
    }

    document.getElementById("resultado").innerHTML = "Cadrasto realizado com sucesso!<br>" + "Nome:" + nome;
        "Cadastro realizado com sucesso!<br>Nome: " + nome;  
});