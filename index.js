function saudacao(nome) {
    return "Olá " + nome; 
}

function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length; 
}
