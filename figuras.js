// Código del cuadrado
console.group("CUADRADO")

let ladoCuadrado = 6;
console.log("El lado del cuadrado es 6 cm");

let perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es ${perimetroCuadrado} cm.`);

let areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd()

// Código triángulo
console.group("TRIÁNGULO")

let lado1 = 6
let lado2 = 6
let base = 10
let altura = 8.5

let perimetroTriangulo = lado1 + lado2 + base

console.log(`El perímetro del triangulo es ${perimetroTriangulo} cm`)

let areaTriangulo = (base * altura) /2
console.log(`El área del triángulo es ${areaTriangulo}`)

console.groupEnd()

// Código del Circulo
console.group("CIRCULO")
const pi = 3.1416
let radio = 8
let diametro = radio * 2

let perimetroCirculo = diametro * pi
console.log(`El perímetro del circulo es ${perimetroCirculo}`)

let areaCirculo = (radio * radio) * pi
console.log(`Área del circulo es ${areaCirculo}`)

console.groupEnd()
