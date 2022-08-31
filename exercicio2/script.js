const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`Quantidade de caracteres da string sem remover os espaços: ${minhaString.length} \nQuantidade de caracteres da string com os espaços removidos: ${minhaString.trim().length}`);
console.log(`A nova frase é: \"${minhaString.replace("________", "sticioso").trim()}\"`);