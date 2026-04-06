document.getElementById(formAdocao) .addEventListener("submit", function (e) {
    e.preventDeFault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal" :checked');

    if(nome.length < 3) return alert("Nome Inválido");

    document.getElementById("resultado").innerHTML = "Cadrasto realizado com sucesso!<br>" + "Nome:" + nome;
    
});