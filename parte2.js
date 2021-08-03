// Exercicio 1

const arr = [];

for (let i = 0; i <= 100; i++) {
  i % 7 == 0 ? arr.push(i) : null;
}

console.log(arr);

// Exercicio 2

const repeteTexto = (texto, vezes) => {
    let novoTexto = '';
    for (vezes; vezes != 0; vezes--) {
        novoTexto += texto;
    }
    return novoTexto;
}

// Exercicio 3

document.querySelector('.pai').appendChild(document.querySelector('.filho'));

// Exercício 4

document.querySelector('div > p:nth-child(2)').innerHTML = 'Texto alterado';
document.querySelector('div > p:last-child').className = 'last';

// Exercicio 5

const isMaior = (idade) => idade > 18 ? 'maior de idade' : 'menor de idade';

// Exercicio 6

const modificaObj = ({nomeObj, pesoObj}) => {
    const newArr = [];
    nomeObj = 'Teclado';
    pesoObj = '500g';
    
    // não entendi muito bem o item 'indexe em array'. uma vez que não foi deixado explícito se precisava iterar sobre algo, armazenei apenas um objeto que segue as modificações requisitadas.
    newArr.push({nomeObj, pesoObj});
    
    return newArr;
}

// Exercicio 7

let string = "Eu quero trabalhar na Seri.e Design";

const modificarTexto = (texto) => [...texto].reverse().join('').replace(/\s/g, '!');

const retornarUltima = (texto) => String(texto.split(' ').slice(-1));

const retornarLength = (texto) => [...texto].length;

// não entendi muito bem, mas vou seguir a interpretação, usando a variável que armazena a última palavra como exemplo:
const retornarType = () => {
    let ultimaPalavra = retornarUltima(string);
    return typeof ultimaPalavra;
}

// Exercicio 8

// posição partindo do 1
document.querySelectorAll('div').forEach((elem, index) => elem.dataset.id = index + 1 );

// Exercicio 9

// aqui me preocupo apenas com o DOM tal como foi proposto no exercício.

document.querySelector('.content > ul > li').addEventListener('click', (e) => {
    // checar se o clique foi mesmo em "Categoria"  
    if (e.target.firstChild.textContent.includes("Categoria")) {
        let elemTarget = document.querySelector('.subcontainer > ul');

        let div = document.querySelector('.content');

        if (!div.className.includes('active')) {
            elemTarget.style.display = 'unset';
            div.classList.add('active');
        } else {
            elemTarget.style.display = 'none';
            div.classList.remove('active');
        }
    }
})

// Exercicio 10

// intervalObserver define um intervalo que checa, a cada 1 segundo, se um elemento que corresponde ao seletor 'footer .content' existe no DOM. Se esse elemento existir e o tempo passado for menor que 5 segundos, ele faz algo;  se o tempo passado for igual a 5 segundos, a execução de intervalObserver é interrompida; se ambas as condições mencionadas até aqui não forem cumpridas, a variável responsável pelo tempo passado é acrescida de 1, partindo para a próxima iteração. A resposta mais coerente seria a D.
