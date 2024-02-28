var total = 0;
var monto = 0;
function calcular() {
    var articulo = document.getElementById("tipo").value;
    var monto = document.getElementById("monto").value;

    console.log(articulo);
    console.log(monto);

    document.getElementById("tipo").value = "";
    document.getElementById("monto").value = "";

    let busquedaE = document.querySelector('.Resultados');
    let divNUEVO = document.createElement("div");
    divNUEVO.setAttribute("class", "divNUEVO");
    let parrafo1 = document.createElement("p");
    parrafo1.textContent = "Articulo: " + articulo;
    divNUEVO.appendChild(parrafo1);
    busquedaE.appendChild(divNUEVO);
    let divNUEVO2 = document.createElement("div");
    divNUEVO2.setAttribute("class", "divNUEVO");
    let parrafo2 = document.createElement("p");
    parrafo2.textContent = "Monto: " + monto;
    divNUEVO.appendChild(parrafo2);
    busquedaE.appendChild(divNUEVO);

    console.log(total);
    var montoint = parseInt(monto);
    console.log(montoint);
    total = total + montoint;
    console.log(total);

    let busquedaG = document.querySelector('.Total');
    let divN = document.createElement("div");
    divN.setAttribute("class", "divNUEVO");
    let p1 = document.createElement("p");
    p1.textContent = "Gasto total acumulado: " + total;
    divN.appendChild(p1);
    busquedaG.appendChild(divN);
}



