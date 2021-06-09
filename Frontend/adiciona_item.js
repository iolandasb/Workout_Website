function transfereItemTabela() { //Relacionado ao botão "Adicionar" do HTML
    
    //Aqui se está trazendo as tabelas do HTML, bem como o input de checkbox.
    let tabela1 = document.getElementById('tabela1');
    let tabela2 = document.getElementById('tabela2');
    let checkboxes = document.getElementsByName('check');

    for (let i = 0; i < checkboxes.length; i++) { //Cria um loop para que todo o processo ocorra a cada nova seleção de item, verificando item a item
        
        if (checkboxes[i].checked) { //"Se um determinado checkbox estiver ticado".

            //Cria as linhas na nova coluna.
            let novaLinha = tabela2.insertRow(tabela2.length); //Insere uma nova linha na tabela 2 dentro de seu tamanho.
            celula1 = novaLinha.insertCell(0); //Insere uma nova célula na posição "0" da tabela 2.
            celula2 = novaLinha.insertCell(1); //Insere uma nova célula na posição "1" da tabela 2.
            celula3 = novaLinha.insertCell(2); //Insere uma nova célula na posição "2" da tabela 2.

            //Adiciona valor às novas linhas.
            celula1.innerHTML = tabela1.rows[i+1].cells[0].innerHTML; //O "innerHTML" controla um elemento interno do HTML.
            celula2.innerHTML = "<input type='number' name='time2'>"; //Aqui se está criando um novo input do tipo número para a nova tabela.
            celula3.innerHTML = "<input type='checkbox' name='check2'>"; //Aqui se está criando um novo input do tipo checkbox para a nova tabela.

            //Remove os itens transferidos da primeira tabela. Como o "length" da "tabela1" muda com essa retirada, é necessário decrescer o valor de "i", por isso o "i--".
            let index = tabela1.rows[i+1].rowIndex;
            tabela1.deleteRow(index); //Aqui a linha é deletada
            i--; //Decresce o "length" da tabela 1.
        }

    }

}

function devolveItemTabela() { //Relacionado ao botão "Excluir" do HTML
    
    let tabela1 = document.getElementById('tabela1');
    let tabela2 = document.getElementById('tabela2');
    let checkboxes = document.getElementsByName('check2');

    for (let i = 0; i < checkboxes.length; i++) {
        
        if (checkboxes[i].checked) {

            //Cria as linhas na nova coluna.
            let novaLinha = tabela1.insertRow(tabela1.length);
            celula1 = novaLinha.insertCell(0);
            celula2 = novaLinha.insertCell(1);
            celula3 = novaLinha.insertCell(2);

            //Adiciona valor às novas linhas.
            celula1.innerHTML = tabela2.rows[i+1].cells[0].innerHTML;
            celula2.innerHTML = "<input type='number' name='time'>";
            celula3.innerHTML = "<input type='checkbox' name='check'>";

            //Remove os itens transferidos da primeira tabela. Como o "length" da "tabela2" muda com essa retirada, é necessário decrescer o valor de "i", por isso o "i--".
            let index = tabela2.rows[i+1].rowIndex;
            tabela2.deleteRow(index);
            i--;
        }
    }

}


function somaTempo() { //Relacionado ao botão "Tempo Total" do HTML

   //Aqui se está trazendo os inputs do HTML.
   let tempo = document.getElementsByName('time2'); //Input do tempo de treino de cada item criado para a tabela 2.
   let resultado = document.getElementById('valor'); //Input da caixa de texto do "Tempo Total".
   let soma = 0; //A variável inicia em "0".

   //O loop verifica item por item do input da "tabela2". 
   for (let i = 0; i < tempo.length; i++) {

        //Primeiro se verifica se o item do input de tempo não é vazio, e se ele não for, o item é somado na variável "soma". O "parseInt" é para transformar o texto em número inteiro, e ele atua em relação ao valor do item do input.
        if(tempo.item(i).value != "") {
            soma = soma + parseInt(tempo.item(i).value);

            //Insere o resultado da soma na caixa de "Tempo de treino em minutos".
            resultado.value = soma;
        }

    } 
        
}