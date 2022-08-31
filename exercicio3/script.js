const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";
const fraseModificada = frase.replace("verde", "rosa").replace("azul", "laranja").replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"); 
console.log(`Nova frase: ${fraseModificada}`);
console.log(`Inclui verde? ${fraseModificada.includes("verde")}`);
console.log(`Inclui laranja? ${fraseModificada.includes("laranja")}`);
