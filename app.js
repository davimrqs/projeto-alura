const amigo = document.getElementById('amigo');
const sorteado = document.getElementById('resultado');
const listaAmigos = document.getElementById('listaAmigos');

let amigos = [];

function adicionarAmigo(){
    if (amigo.value.trim() === '') {
        alert('Por favor, insira um nome.');
    }else{
        if (amigos.includes(amigo.value.trim())){
            alert('Você já inseriu este amigo.');
            return;
        }
        listaAmigos.innerHTML = "";
        amigos.push(amigo.value);

        amigos.forEach(amigo => {
            let item = document.createElement('li');
            item.textContent = amigo;
            listaAmigos.appendChild(item);
        });

        let entrada = document.querySelector('#amigo');
        entrada.value = '';

        console.log(amigos);    
    }
}

function sortearAmigo() {
    if (amigos.length == 0){
        alert('Não há amigos a serem sorteados.');
    }else{
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        console.log(amigoSorteado);

        listaAmigos.innerHTML = '';
        sorteado.innerHTML = 'O ganhador foi ' + amigoSorteado;
    }
}