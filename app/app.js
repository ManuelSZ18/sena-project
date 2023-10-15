//PROBLEMA 1
function calcularPerimetroTriangulo(){
    let ladoATriangulo = document.getElementById('ladoATriangulo').value;
    let ladoBTriangulo = document.getElementById('ladoBTriangulo').value;
    let ladoCTriangulo = document.getElementById('ladoCTriangulo').value;
    let perimetro = Number(ladoATriangulo) + Number(ladoBTriangulo) + Number(ladoCTriangulo);
    return perimetro;
}

function calcularAreaTriangulo(){
    let ladoBTriangulo = document.getElementById('ladoBTriangulo').value;
    let alturaTriangulo = document.getElementById('alturaTriangulo').value;
    let area = (ladoBTriangulo*alturaTriangulo)/2;
    return area;
}

function calcularPerimetroRectangulo(){
    let ladoARectangulo = document.getElementById('ladoARectangulo').value;
    let ladoBRectangulo = document.getElementById('ladoBRectangulo').value;
    let perimetro = (Number(ladoARectangulo)*2) + (Number(ladoBRectangulo)*2);
    return perimetro;
}

function calcularAreaRectangulo(){
    let ladoARectangulo = document.getElementById('ladoARectangulo').value;
    let ladoBRectangulo = document.getElementById('ladoBRectangulo').value;
    let area = ladoARectangulo*ladoBRectangulo;
    return area;
}


function calcularPerimetroCuadrado(){
    let ladoACuadrado = document.getElementById('ladoACuadrado').value;
    let perimetroCuadrado = Number(ladoACuadrado)*4;
    return perimetroCuadrado;
}   

function calcularAreaCuadrado(){
    let ladoACuadrado = document.getElementById('ladoACuadrado').value;
    let areaCuadrado = Number(ladoACuadrado)*Number(ladoACuadrado);
    return areaCuadrado;
}


function calcularPerimetroCirculo(){
    let radioCirculo = document.getElementById('radioCirculo').value;
    let perimetroCirculo = Number(radioCirculo)*2*Math.PI;
    return perimetroCirculo.toFixed(2);
}   

function calcularAreaCirculo(){
    let radioCirculo = document.getElementById('radioCirculo').value;
    let areaCirculo = Math.PI*(Number(radioCirculo)*Number(radioCirculo));
    return areaCirculo.toFixed(2);
}

addEventListener('click', function(){
    let perimetroTriangulo = calcularPerimetroTriangulo();
    let areaTriangulo = calcularAreaTriangulo();
    document.getElementById('perimetroTriangulo').innerHTML = perimetroTriangulo;
    document.getElementById('areaTriangulo').innerHTML = areaTriangulo;
    let perimetroRectangulo = calcularPerimetroRectangulo();
    let areaRectangulo = calcularAreaRectangulo();
    document.getElementById('perimetroRectangulo').innerHTML = perimetroRectangulo;
    document.getElementById('areaRectangulo').innerHTML = areaRectangulo;
    let perimetroCuadrado = calcularPerimetroCuadrado();
    let areaCuadrado = calcularAreaCuadrado();
    document.getElementById('perimetroCuadrado').innerHTML = perimetroCuadrado;
    document.getElementById('areaCuadrado').innerHTML = areaCuadrado;
    let perimetroCirculo = calcularPerimetroCirculo();
    let areaCirculo = calcularAreaCirculo();    
    document.getElementById('perimetroCirculo').innerHTML = perimetroCirculo;
    document.getElementById('areaCirculo').innerHTML = areaCirculo;
});


//PROBLEMA 2

let edades = [];

function insertarEdades(){
    agregarEdad();
    document.getElementById('edades').innerHTML = edades;
}

function limpiarEdades(){
    edades = [];
    document.getElementById('edades').innerHTML = edades;
}

//Agregar edades

function agregarEdad(){
    if(edades.length < 10){
        let number = document.getElementById('edad').value;
        let edad = Number(number);
        edades.push(edad);
        document.getElementById('edad').value = '';
    }else{
        alert('No se pueden agregar más de 10 edades');
    }
}

//Cantidad de Adultos Mayores
function calcularAdultosMayores(){
    let adultosMayores = 0;
    for(let i = 0; i < edades.length; i++){
        if(edades[i] >= 60){
            adultosMayores++;
        }
    }
    document.getElementById('adultosMayores').innerHTML = adultosMayores;
}

//Cantidad de Menores de Edad
function calcularMenoresEdad(){
    let menoresEdad = 0;
    for(let i = 0; i < edades.length; i++){
        if(edades[i] < 18){
            menoresEdad++;
        }
    }
    document.getElementById('menoresEdad').innerHTML = menoresEdad;
}

//Cantidad de Mayores de Edad
function calcularMayoresEdad(){
    let mayoresEdad = 0;
    for(let i = 0; i < edades.length; i++){
        if(edades[i] >= 18){
            mayoresEdad++;
        }
    }
    document.getElementById('mayoresEdad').innerHTML = mayoresEdad;
}

//Edad mas baja
function calcularEdadBaja(){
    let edadBaja = edades[0];
    for(let i = 0; i < edades.length; i++){
        if(edades[i] < edadBaja){
            edadBaja = edades[i];
        }
    }
    document.getElementById('edadBaja').innerHTML = edadBaja;
}

//Edad mas alta
function calcularEdadAlta(){
    let edadAlta = 0;
    for(let i = 0; i < edades.length; i++){
        if(edades[i] > edadAlta){
            edadAlta = edades[i];
        }
    }
    document.getElementById('edadAlta').innerHTML = edadAlta;
}


//Promedio de edades
function calcularPromedioEdades(){
    let suma = 0;
    for(let i = 0; i < edades.length; i++){
        suma += edades[i];
    }
    let promedio = suma / edades.length;
    document.getElementById('promedioEdades').innerHTML = promedio.toFixed(0);
}

