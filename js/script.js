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
function divisao() {
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
function triangulo() {
    let baseT = parseFloat(document.getElementById("baseT").value)
    let alturaT = parseFloat(document.getElementById("alturaT").value)
    let area = (baseT * alturaT) / 2
    document.getElementById("areaTr").innerHTML = area
}

//Descobrindo a Hipotenusa
function hipotenusa() {
    let co = parseFloat(document.getElementById("co").value)
    let ca = parseFloat(document.getElementById("ca").value)
    let hipotenusa
    hipotenusa = Math.pow(co, 2) + Math.pow(ca, 2)
    hipotenusa = Math.sqrt(hipotenusa)
    document.getElementById("hipot").innerHTML = hipotenusa
}

//Converção de Real para Dólar
function conversao() {
    let real = parseFloat(document.getElementById("real").value)
    let cotacao = parseFloat(document.getElementById("cotacao").value)
    let conversao
    conversao = real / cotacao
    document.getElementById("conver").innerHTML = conversao
}

//Converção de Celsius para Fahrenheit
function temperatura() {
    let celsius = document.getElementById("celsius")
    let mudado = document.getElementById("troca")
    mudado.innerText = (parseFloat(celsius.value) * 1.8) + 32
}

//Média de 3 notas
function medias() {
    let media1 = parseFloat(document.getElementById("nota1").value)
    let media2 = parseFloat(document.getElementById("nota2").value)
    let media3 = parseFloat(document.getElementById("nota3").value)
    let medido
    medido = (media1 + media2 + media3) / 3
    document.getElementById("medido").innerHTML = medido
}

//Bhaskara
function raizes() {
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("c")
    let delta
    let x1
    let x2
    delta = Math.pow(parseFloat(b.value), 2) - (4 * parseFloat(a.value) * parseFloat(c.value))
    if (delta < 0) {
        document.getElementById("alerta").innerText = ("Não deu :(")
    }
    else {
        x1 = (- parseFloat(b.value) - Math.sqrt(delta)) / (2 * parseFloat(a.value))
        x2 = (- parseFloat(b.value) + Math.sqrt(delta)) / (2 * parseFloat(a.value))
        document.getElementById("x1").innerHTML = ("X1 = ") + x1
        document.getElementById("x2").innerHTML = ("X2 = ") + x2
    }
}

