//PROBLEMA 1 <----------------------------------------------------------------------------------------------------------------------------->
/*Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas según la siguiente tabla:*/

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


//PROBLEMA 2 <----------------------------------------------------------------------------------------------------------------------------->
/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.*/
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
    let number = document.getElementById('edad').value;
    let edad = Number(number);
    if(edad >= 1 && edad <= 120){
        if(edades.length < 10){
            edades.push(edad);
            document.getElementById('edad').value = '';
        }else{
            alert('No se pueden agregar más de 10 edades');
        }
    }else{
        alert('Debe ingresar una edad entre 1 y 120 años');
        document.getElementById('edad').value = '';
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

//PROBLEMA 3 <----------------------------------------------------------------------------------------------------------------------------->
/*Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos de forma ascendente.*/
let numeros1 = [];
let numeros2 = [];

function insertarNumeros(){
    agregarNumero();
    document.getElementById('numerosAgregados1').innerHTML = numeros1;
    document.getElementById('numerosAgregados2').innerHTML = numeros2;
}

function agregarNumero(){
    let number = document.getElementById('numbers').value;
    let numero = Number(number);
    if(numeros1.length < 5){
        if(numeros1.length == 0){
            numeros1.push(numero);
            document.getElementById('numbers').value = '';
        }else if(numero > numeros1[numeros1.length-1]){
            numeros1.push(numero);
            document.getElementById('numbers').value = '';
        }else{
            alert('Debe ingresar un número mayor al anterior');
            document.getElementById('numbers').value = '';
        }
    }else if(numeros2.length < 5){
        if(numeros2.length == 0){
            numeros2.push(numero);
            document.getElementById('numbers').value = '';
        }else if(numero > numeros2[numeros2.length-1]){
            numeros2.push(numero);
            document.getElementById('numbers').value = '';
        }else{
            alert('Debe ingresar un número mayor al anterior');
            document.getElementById('numbers').value = '';
        }
    }else{
        alert('No se pueden agregar más de 5 números por vector');
        document.getElementById('numbers').value = '';
    }
}

function limpiarNumeros(){
    numeros1 = [];
    numeros2 = [];
    document.getElementById('numerosAgregados1').innerHTML = numeros1;
    document.getElementById('numerosAgregados2').innerHTML = numeros2;
}

function calcularMezcla(){
    let numerosMezclados = numeros1.concat(numeros2);
    let resultadoOrdenado = numerosMezclados.sort((a,b) => a-b);
    document.getElementById('numerosMezclados').innerHTML = resultadoOrdenado;
}

//PROBLEMA 4 <----------------------------------------------------------------------------------------------------------------------------->

let personas = [];

function insertarPersona(){
    agregarPersona();
    document.getElementById('personasRegistradas').innerHTML = personas.length;
}

function agregarPersona(){
    let nombre = document.getElementById('nombrePersona').value;
    let cedula = document.getElementById('cedulaPersona').value;
    let fechaNacimiento = document.getElementById('fechaNacimientoPersona').value;
    let correo = document.getElementById('correoPersona').value;
    let ciudadResidencia = document.getElementById('ciudadResidenciaPersona').value;
    let ciudadOrigen = document.getElementById('ciudadOrigenPersona').value;
    let artista = document.getElementById('artistaPersona').value;
    let tituloCancion1 = document.getElementById('tituloCancion1Persona').value;
    let tituloCancion2 = document.getElementById('tituloCancion2Persona').value;
    let tituloCancion3 = document.getElementById('tituloCancion3Persona').value;
    let persona = {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        artista,
        tituloCancion1,
        tituloCancion2,
        tituloCancion3
    }
    if(personas.length < 6){
        personas.push(persona);
        document.getElementById('nombrePersona').value = '';
        document.getElementById('cedulaPersona').value = '';
        document.getElementById('fechaNacimientoPersona').value = '';
        document.getElementById('correoPersona').value = '';
        document.getElementById('ciudadResidenciaPersona').value = '';
        document.getElementById('ciudadOrigenPersona').value = '';
        document.getElementById('artistaPersona').value = '';
        document.getElementById('tituloCancion1Persona').value = '';
        document.getElementById('tituloCancion2Persona').value = '';
        document.getElementById('tituloCancion3Persona').value = '';
    }else{
        alert('No se pueden agregar más de 6 personas');
    }
}

function limpiarRegistros(){
    personas = [];
    document.getElementById('personasRegistradas').innerHTML = personas.length;
    document.getElementById('posicion').value = '';
    document.getElementById('consultaNombre').value = '';
    document.getElementById('consultaCedula').value = '';
    document.getElementById('consultaFechaNacimiento').value = '';
    document.getElementById('consultaCorreo').value = '';
    document.getElementById('consultaCiudadResidencia').value = '';
    document.getElementById('consultaCiudadOrigen').value = '';
    document.getElementById('consultaArtista').value = '';
    document.getElementById('consultaTituloCancion1').value = '';
    document.getElementById('consultaTituloCancion2').value = '';
    document.getElementById('consultaTituloCancion3').value = '';

}

function consultarPersona(){
    let posicion = document.getElementById('posicion').value;
    let persona = personas[posicion-1];
    document.getElementById('consultaNombre').innerHTML = persona.nombre;
    document.getElementById('consultaCedula').innerHTML = persona.cedula;
    document.getElementById('consultaFechaNacimiento').innerHTML = persona.fechaNacimiento;
    document.getElementById('consultaCorreo').innerHTML = persona.correo;
    document.getElementById('consultaCiudadResidencia').innerHTML = persona.ciudadResidencia;
    document.getElementById('consultaCiudadOrigen').innerHTML = persona.ciudadOrigen;
    document.getElementById('consultaArtista').innerHTML = persona.artista;
    document.getElementById('consultaTituloCancion1').innerHTML = persona.tituloCancion1;
    document.getElementById('consultaTituloCancion2').innerHTML = persona.tituloCancion2;
    document.getElementById('consultaTituloCancion3').innerHTML = persona.tituloCancion3;
}

