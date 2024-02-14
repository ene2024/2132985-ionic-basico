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

function login(){
    alert("Login correcto");
    document.getElementById("usuarioS").value = "";
    document.getElementById("contrasena1").value = "";
}

function registro(){
    var campotexto = document.getElementById("usuarioR");
    var txt = campotexto.value
    alert("Registro correcto con el nombre de usuario: " + txt)
    document.getElementById("usuarioR").value = "";
    document.getElementById("contrasena2").value = "";
}

