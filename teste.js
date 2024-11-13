//Exercicio 1
function mostrarMensagem() {
    document.getElementById("mensagem").innerText =
        "O meu nome é Nome Apelido e este teste está a ser realizado em ";
}
function mostrarData() {
    const dataAtual = new Date().toLocaleDateString();
    document.getElementById("mensagem").innerText += " " + dataAtual;
}

//Exercicio 2
// Teste condicional com variáveis do tipo string
const string1 = "Rodrigo";
const string2 = "Fernandes";
if (string1.length < string2.length) {
    console.log("Condição é True");
}

//Exercicio 3
// Demonstração de um array com extração do primeiro e quarto nome
const nomes = ["Mário", "Ângelo", "Carla", "Susana", "Marta"];
console.log("Primeiro nome:", nomes[0]);
console.log("Quarto nome:", nomes[3]);   

//Exercicio 4
// Demonstração de um objeto com frutas, cores e preços
const frutas = {
    maca: { cor: "vermelho", preco: 1.2 },
    banana: { cor: "amarelo", preco: 0.8 },
    laranja: { cor: "laranja", preco: 1.1 }
};
console.log("Frutas:", frutas);

//Exercicio 5
// Junta duas strings e soma dois números
const saudacao = "Olá, o meu nome é ";
const nome = "Rodrigo Pinto";
const mensagem = saudacao + nome;
const num1 = 10;
const num2 = 7;
const resultado = mensagem + ", e tenho " + (num1 + num2) + " anos.";
console.log(resultado); 

//Exercicio 6
// Função para converter metros em centímetros ao clicar num botão
function converterMetros() {
    const metros = document.getElementById("metros").value;
    if (metros.length <= 0) {
        document.getElementById("resultadoConversao").innerText = "Insira um valor válido!"
    } else {
        const centimetros = metros * 100;
        document.getElementById("resultadoConversao").innerText = `${metros} m = ${centimetros} cm`;
    }
}

//Exercicio 7
// Extração de uma palavra específica da frase
const frase = "Utilizar esta frase para extrair a palavra que está a seguir a para";
const palavras = frase.split(" ");
const palavraExtraida = palavras[palavras.length - 5]; 
console.log("Palavra extraída:", palavraExtraida);

//Exercicio 8
// Substituição de nome e apelido
let fraseNome = "O meu nome é Mário e o meu apelido é Silva";
fraseNome = fraseNome.replace("Mário", "Rodrigo").replace("Silva", "Pinto");
console.log("Frase modificada:", fraseNome);
