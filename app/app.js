//Escuchar un evento en el index.html para calcular el Perimetro y Area de un Triangulo.
function calcularPerimetroTriangulo(){
    var ladoA = document.getElementById('ladoA').value;
    var ladoB = document.getElementById('ladoB').value;
    var ladoC = document.getElementById('ladoC').value;
    var perimetro = Number(ladoA) + Number(ladoB) + Number(ladoC);
    return perimetro;
}

function calcularAreaTriangulo(){
    var base = document.getElementById('ladoB').value;
    var altura = document.getElementById('altura').value;
    var area = (base*altura)/2;
    return area;
}

addEventListener('click', function(){
    var perimetro = calcularPerimetroTriangulo();
    var area = calcularAreaTriangulo();
    document.getElementById('perimetro').innerHTML = perimetro;
    document.getElementById('area').innerHTML = area;
});