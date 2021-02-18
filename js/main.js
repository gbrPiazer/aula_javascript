
function cliclou(){
    //alert("obrigado");
    document.getElementById("agradecimento").innerHTML = "Obrigado";
}

function redirecionar(){
    window.open("https://google.com/");
    window.location.href = "https://google.com/";
}

function trocar(elemento){
    elemento.innerHTML = 'Obrigado por passar o mouse';
}

function voltar(elemento){
    elemento.innerHTML = 'Passe o mouse aqui';
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar;
function validaIdade(idade){
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
//console.log(soma(5,10));

//Aula_3
/*


var d = new Date();

console.log(d.getDay());
console.log(d.getHours() + "/" + d.getMinutes());

/*

var count;
for(count=0;count <=5; count++){
    console.log(count);
};
/*

var count = 0;

while (count < 5 ){
    console.log(count);
    count++;
};


/*

var idade = prompt("Qual sua idade?");

if(idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


//Aula_2

//Dicionário
/*
var frutas = [{ nome:"maça", cor:"vermelha"}, { nome:"Uva", cor:"Roxa"}, { nome:"Banana", cor:"Amarelo"}];
console.log(frutas[0].nome);
console.log(frutas[1].cor);




//Array
 var lista = ["maçã", "pêra", "laranja"];

//lista.push("uva");
//lista.pop();

//console.log(lista);
console.log(lista.toString());
//console.log(lista.join(" | "));







/*
//Aula_1


var nome = "Gabriel";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";


// alert(nome + ' tem ' + idade + ' anos');
// alert(idade + idade2)
console.log(nome);
console.log(n1 + n2);
//console.log(frase.replace("Japão", "Brasil"));


*/

