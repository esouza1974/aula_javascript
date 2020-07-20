
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar! Cliqui aqui</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com.br/");   // abre outra janela
    //window.location.href = "https://www.google.com.br/";  // abre o site na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse! :)";
    elemento.innerHTML = "Obrigado por passar o mouse! :)"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/

//alert(soma(5, 10));




/*
var d = new Date();
alert(d);
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
*/

/*
var contador;
for(contador=1; contador <=5; contador++){
    alert(contador)
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count)
    alert(count)
    count = count + 1     // poder ser também  count++
};
*/

/*
//var idade = 18;
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade!")
} else{
    alert("Menor de idade!")
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));
//console.log(lista.reverse());
//console.log(lista[1]);

//alert(lista[1]);
*/


/*
var nome = "Eduardo Souza";
var idade = 45;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo."
//alert(nome + " tem " + idade + " anos!");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);
//alert(frase.replace("Japão", "Camarões"));
*/
