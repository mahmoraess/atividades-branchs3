function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function saudacao(nome) {
    return "Olá" + nome; 
}

console.log("Média:", calcularMedia([10, 8, 6])); // esperado: 8
console.log("Temperatura:", celsiusParaFahrenheit(25)); // esperado: 77
console.log("Saudação:", saudacao("Maria")); // esperado: "Olá Maria"
