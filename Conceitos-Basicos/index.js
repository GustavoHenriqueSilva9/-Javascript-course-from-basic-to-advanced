
let nome = "João";
let testeNumber = 25;
const nome2 = "Otavio"; // Não se pode mudar o valor de uma constante
console.log("Olá ",nome," Tudo bem?")
console.log("Olá ",nome2," Tudo bem?")
console.log(typeof testeNumber) // Descobrir o tipo daquela variavel 

// //////////////////////////////////////////////////////////////////////

function imc(){
    const nome = "Luis Otavio Miranda";
    const  nascimento = 1990;
    let anoAtual = 2020;
    let altura = 1.75;
    let peso = 68.5
    let calculo = (peso / (Math.pow(altura, 2)))

    console.log(`${nome}tem',${(anoAtual - nascimento)}, anos, pesa ,${peso}, kg`)
    console.log(`tem ${altura} de altura e seu IMC é de ${calculo}`)
}
imc()
// ////////////////////////////////////////////////////////////////////////

console.log("teste")
alert("teste")
confirm("cancelar ou ok?")
prompt("Olá mundo")

// ////////////////////////////////////////////////////////////////////////

let umaString = "Um Texto";
console.log(umaString.replace('Um', 'outra')) //Replace troca a palavra indicada pela nova palavra
console.log(umaString.length) //Tamanho da String
console.log(umaString.slice(2,6)) // pegar o pedaço para ser exibido
console.log(umaString.split(' '));// quebra a String com a letra ou espaço colocado entre os ()
console.log(umaString.toUpperCase()); // Todas as letras em Maiuscolo 
console.log(umaString.toLowerCase()); // Todas as letras em Minusculo

// /////////////////////////////////////////////////////////////////////////

let num1 = 1;
let num2 = 2;
console.log(num1.toString() + num2) // converte o número para String

let num3 = 13.132545487812212198
console.log(num3.toFixed(2))// Mostra apenas duas casas decimais depois da virgula
console.log(Number.isInteger(num3))// Me retorna se o Número é um inteiro

// //////////////////////////////////////////////////////////////////////////

let num1 = 9.54578;
let num2 = Math.floor(num2) // arredonda o valor para baixo
let num2 = Math.ceil(num2) // arredonda o valor para cima
let num2 = Math.round(num1) // arredonda o valor para o mais proximo
console.log(Math.max(1,2,3,4,5,6,-10)) // Maior número dessa sequencia
console.log(Math.min(1,2,3,4,5,6,-10)) // Menor número dessa sequencia
Math.random() * (10 - 5) + 5 // Gera um número aleatorio (Entre 10 e 5)
Math.pow(2, 10) // Dois elevado a Dez
(2 ** 10) // Dois elevado a Dez sem Math.pow

// /////////////////////////////////////////////////////////////////////////

const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero

texto.innerHTML = `<p><strong>Seu número é </strong> ${numero} 
<p>Raiz quadrada: ${Math.sqrt(numero)}</p>
<p>${numero} é um numero inteiro? ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredonda para baixo: ${Math.ceil(numero)}</p>
<p>Arrendonda para cima ${Math.round(numero)}</p>
<p>Com duas casas decimais ${(numero.toFixed(2))}</p>`




