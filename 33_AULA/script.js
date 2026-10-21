//Lista inicial de estudantes armazenada em um array
const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Daniel Santos",
    "Gabriel Ferreira",
    "Helena Rodrigues",
    "Lucas Vinícius"
]

// Obtendo referencias dos elementos html pelo identificador
const elementoLista = document.getElementById("listaEstudantes");
const elementoCont = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    //Limpa o conteúdo atual das listas para evitar duplicações indesejadas
    elementoLista.innerHTML = "";

 //percorre cada posição do array usando o laço for
    for (let i=0; i <listaDeEstudantes.length; i++){
     //Cria um elemento <li> novo em memória
     const itemLi = document.createElement("li"); //<li></li>
     itemLi.className = "item-nome"; //<li class="item-nome"></li>

     //Define o conteudo interno do item com nome e sua respectiva ordem visual
     itemLi.innerHTML =  `
        <span>${listaDeEstudantes[i]}</span>
        <spanclass="posição-tag">#${i + 1}</span>
     `;

     //Anexa o item criado dentro da tag <ul> da página
     elementoLista.appendChild(itemLi); // 
    }

    //Atualiza a barra de status com o total de registros lidos pelo laço
    elementoCont.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`;
    elementoCont.style.color = "#16a34a";

    console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados.`);
    
}

function limparLista() {
    elementoLista.innerHTML = "";
    elementoCont.innerText = `Lista limpa pelo usuário. Nenhum nome na tela.`;
    elementoCont.style.color = "#475569";
    console.log("Tela Limpa");
}

exibirListaAutomaticamente();

function adicionarNovoNome() {
    const batata = document.getElementById('campoNovoNome').value.trim(); // .trim() remove espaços em branco extras

    if (batata !== "") {
        let nomeDuplicado = false;

        for (let i = 0; i < listaDeEstudantes.length; i++) {
            if (listaDeEstudantes[i].toLowerCase() === batata.toLowerCase()) {
                nomeDuplicado = true;
            }
        }

        if (nomeDuplicado === false) {
            listaDeEstudantes.push(batata);
            exibirListaAutomaticamente();
            document.getElementById('campoNovoNome').value = "";
            document.getElementById('campoNovoNome').focus();
        } else {
        
            elementoCont.innerText = "Erro: Este nome já existe na lista!";
            elementoCont.style.color = "#dc2626"; 
        }
    }
}
    function exibirOrdemInvertida() {
   
    elementoLista.innerHTML = "";

    
    let contador = listaDeEstudantes.length - 1;

  
    while (contador >= 0) {
        
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";

      
        itemLi.innerHTML = 
        `<span>${listaDeEstudantes[contador]}</span> <span class="posição-tag">#${contador + 1}</span> `;
        elementoLista.appendChild(itemLi);

        contador--;
    }

   elementoCont.innerText = "Registros sendo visualizados em ordem inversa.";
    elementoCont.style.color = "#2563eb";

    console.log("Lista exibida em ordem inversa com sucesso.");
}
