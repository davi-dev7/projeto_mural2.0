async function carregarMensagens() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await resposta.json();

    const lista = document.getElementById("listaMensagens");

    lista.innerHTML = "";

    dados.slice(0, 5).forEach(post => {
        const item = document.createElement("li");
        item.textContent = post.title;
        lista.appendChild(item);
    });
}

// Executa automaticamente ao abrir a página
carregarMensagens();

async function enviarMensagem() {
    const input = document.getElementById("mensagem");
    const texto = input.value;

    if (texto === "") {
        alert("Digite uma mensagem!");
        return;
    }

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: texto
        })
    });

    const dados = await resposta.json();

    alert("Mensagem enviada com sucesso! ID: " + dados.id);

    // Mostrar na tela
    const lista = document.getElementById("listaMensagens");
    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);

    input.value = "";
}