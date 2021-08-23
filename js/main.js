var nome = "danilo fonseca";
//var idade = 21;
var idade2 =20;
var frase = " Japão eo melhor time do mundo";
//alert( nome +" tem "+ idade + "anos");
//alert( idade + idade2);

console.log(idade2 + idade);
console.log(frase);
//alert(frase.replace("Japão", "Brasil"));



// Arrays

//var lista = ["maça", "uva", "manga"];
//lista.push("laranja"); // adionar elemento 
//lista.pop(); //remove
//console.log(lista[3]);

var fruta ={nome:"maça", cor:"vermelha"};
console.log(fruta);


// condicionais
/*
var idade = prompt("qual sua idade");
if (idade >= 18) {
	alert("Maior de idade");
}else{
	alert("Menor idade ");
};

*/

//laços de Repetições
/*
var count = 0 ;
while ( count <= 5){
	console.log(count);
	alert("count");
	count++;

}
*/

/*
var count;
for( count  = 0;count <= 5; count++){
	console.log(count);
	alert("count");

}
*/

// DATAS
/*
var d = new Date();
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.geMinutes());
*/

// funcoes

function soma(n1, n2){
	return n1 + n2
}

//alert(soma(2,6));

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

//alert(setReplace("vai Japão", "Japão", "Brasil"));

function validaidade(idade){
	if( idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
	
}

//var idade = prompt("Qual sua idade ");
//console.log(validaidade(idade));

// Manipulando arquirvos 

function clicou(){
	document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
	//alert("obrigado por clicar");
}

function redirecionar(){
	window.open("https://github.com/Danilo-san/");
	window.location.href = "https://github.com/Danilo-san/";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	//alert("trocar texto");
	elemento.innerHTML = "obrigado por clicar";

}

function voltar(elemento)
{
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML="Passe o mouse";


}


function load(){
	alert("Pagina carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}