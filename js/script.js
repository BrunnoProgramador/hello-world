// Calculadora de apenas dois números
function soma(num1, num2) {
    alert(num1 + num2);
}
function divisao(num1, num2) {
    alert(num1 / num2);
}
function multiplicacao(num1, num2) {
    alert(num1 * num2);
}
function subtracao(num1, num2) {
    alert(num1 - num2);
}

//Mostrar Nome
function mostrarnome() {
    let nome = prompt("Qual o seu nome?")
    alert("Olá, " + nome)
}

//Área do Retângulo
function areaR() {
    let base = prompt("Base:")
    let altura = prompt("Altura:")
    let area
    area = base * altura
    alert("A área do retângulo é: " + area)
}

//Area do Circulo
function areaC() {
    let raio = prompt("Valor do raio:")
    let areaC
    areaC = Math.pow(raio, 2) * Math.PI
    alert("A área do circulo é:" + areaC)
}

//Descobrindo a Hipotenusa
function hipotenusa() {
    let co = prompt("valor do cateto oposto:")
    let ca = prompt("Valor do cateto adjacente:")
    let hipotenusa
    hipotenusa = Math.pow(co, 2) + Math.pow(ca, 2)
    hipotenusa = Math.sqrt(hipotenusa)
    alert("Hipotenusa é: " + hipotenusa)
}

//Converção de Real para Dólar
function convercao() {
    let real = prompt("")
    let convercao
    convercao = real * 4, 93
    alert(convercao)
}

//Converção de Celsius para Fahrenheit
function temperatura() {
    let celsius = prompt("")
    let fahrenheit
    fahrenheit = (celsius * 1, 8) + 32
    alert("Conversão: " + fahrenheit)
}

//Média de 3 notas
function medias() {
    let mediau = parseFloat(prompt("nota: "))
    let mediad = parseFloat(prompt("outra nota: "))
    let mediat = parseFloat(prompt("outra nota: "))
    let media
    media = (mediau + mediad + mediat) / 3
    alert("A media é: " + media.toFixed(2))
}

//Bhaskara
function raizes() {
    let primeiro = parseFloat(prompt("A: "))
    let segundo = parseFloat(prompt("B: "))
    let terceiro = parseFloat(prompt("C:"))
    let delta
    let raizp
    let raizs
    delta = Math.pow(segundo, 2) - (4 * primeiro * terceiro)
    if (delta < 0) {
        alert("Essa conta não é possivel ser realizada!")
    }
    else {
        raizp = (- segundo - Math.sqrt(delta)) / (2 * primeiro)
        raizs = (- segundo + Math.sqrt(delta)) / (2 * primeiro)
        alert("Raiz 1: " + raizp)
        alert("Rais 2: " + raizs)
    }
}

