// Calculadora de apenas dois números
function somass() {
    let soma1 = parseFloat(document.getElementById("soma1").value)
    let soma2 = parseFloat(document.getElementById("soma2").value)
    let resultado = soma1 + soma2
    document.getElementById("resultadosoma").innerHTML = resultado
}
function subtracao() {
    let menos1 = parseFloat(document.getElementById("menos1").value)
    let menos2 = parseFloat(document.getElementById("menos2").value)
    let resultado = menos1 - menos2
    document.getElementById("resutadosubtracao").innerHTML = resultado
}
function multiplicacao() {
    let multiplicar1 = parseFloat(document.getElementById("multiplicar1").value) 
    let multiplicar2 = parseFloat(document.getElementById("multiplicar2").value)
    let resultado = multiplicar1 * multiplicar2
    document.getElementById("resultadomultiplicacao").innerHTML = resultado 
}
function divisao () {
    let dividido1 = parseFloat(document.getElementById("dividido1").value)
    let dividido2 = parseFloat(document.getElementById("dividido2").value)
    let resultado
    if (dividido2 == 0) {
        document.getElementById("resultadodivisao").innerHTML = ("Não existe divisão por zero!!")
    }
    else {
        resultado = dividido1 / dividido2
        document.getElementById("resultadodivisao").innerHTML = resultado
    }
}

//Mostrar Nome
function mostrarnome() {
    let nome = prompt("Qual o seu nome?")
    alert("Olá, " + nome)
}

//Área do Retângulo
function areaR() {
    let baseR = parseFloat(document.getElementById("baseR").value)
    let alturaR = parseFloat(document.getElementById("alturaR").value)
    let area = baseR * alturaR
    document.getElementById("areaRe").innerHTML = area
}

//Area do Circulo
function areaC() {
    let raio = parseFloat(document.getElementById("raio").value)
    let areaC
    areaC = Math.pow(raio, 2) * Math.PI
   document.getElementById("areaC").innerHTML = areaC
}
// Área do triangulo
function triangulo(){
    let baseT = parseFloat(document.getElementById("baseT").value)
    let alturaT = parseFloat(document.getElementById("alturaT").value)
    let area = (baseT * alturaT) / 2
    document.getElementById("areaTr").innerHTML = area
}

//Descobrindo a Hipotenusa
function hipotenusa() {
    let co =parseFloat(document.getElementById("co").value)
    let ca =parseFloat(document.getElementById("ca").value)
    let hipotenusa
    hipotenusa = Math.pow(co, 2) + Math.pow(ca, 2)
    hipotenusa = Math.sqrt(hipotenusa)
    document.getElementById("hipot").innerHTML = hipotenusa
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

