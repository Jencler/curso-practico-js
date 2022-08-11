// Código del cuadrado
console.group("CUADRADO")

// let ladoCuadrado = 6;
// console.log("El lado del cuadrado es 6 cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 

// ladoCuadrado * 4;
// console.log(`El perímetro del cuadrado es ${perimetroCuadrado} cm.`);

function areaCuadrado (lado) {
    return lado * lado;
} 
// console.log(`El área del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd()




// Código triángulo
console.group("TRIÁNGULO")

// let lado1 = 6
// let lado2 = 6
// let base = 10
// let altura = 8.5

function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base
} 

// console.log(`El perímetro del triangulo es ${perimetroTriangulo} cm`)

function areaTriangulo (base,altura){
    return (base * altura) /2
} 

// console.log(`El área del triángulo es ${areaTriangulo}`)

console.groupEnd()




// Código del Circulo
console.group("CIRCULO")
const pi = 3.1416
// let radio = 8
 function diametroCiculo (radio){
    return  radio * 2
 } 

function perimetroCirculo (radio){
    const diametro = diametroCiculo(radio)
    return diametro * pi
} 
// console.log(`El perímetro del circulo es ${perimetroCirculo}`)

function areaCirculo (radio) {
    return (radio * radio) * pi
}
    
// console.log(`Área del circulo es ${areaCirculo}`)

console.groupEnd()

/* Interacion con html y javascrpt cuadrado */


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}

/* Triangulo */

function calcularPerimetroTriangulo () {
    
}