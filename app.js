//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Digite um nome!');
        return;
    }
    if (listaDeAmigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    listaDeAmigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    // Sorteia um amigo para o usuário atual
    let amigosDisponiveis = [...listaDeAmigos];
    let indiceSorteador = Math.floor(Math.random() * amigosDisponiveis.length);
    let sorteador = amigosDisponiveis.splice(indiceSorteador, 1)[0];

    let indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    let sorteado = amigosDisponiveis[indiceSorteado];

    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = `<li>O seu amigo secreto é: <strong>${sorteado}</strong></li>`;
}