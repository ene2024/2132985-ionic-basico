function obtenertxt() {
    var campotexto = document.getElementById("texto");
    var txt = campotexto.value
    console.log(txt);
    alert(txt);
    document.getElementById("texto2").value = texto.value;
}
function limpiartxt() {
    document.getElementById("texto").value = "";
    document.getElementById("texto2").value = "";
}

