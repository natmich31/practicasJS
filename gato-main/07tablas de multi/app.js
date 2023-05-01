const generar = () => {
    let n = parseInt(document.querySelector("#n").value);
    document.querySelector("#vn").innerHTML = n
    let div = document.querySelector("#res");
    let tablaHTML = "<table>";
    for (i = 1; i < 10; i++) {
      tablaHTML += "<tr><td>" + n + "x" + i + "=" + (i * n) + "</td></tr>";
    }
    div.innerHTML = tablaHTML + "</table>";
  }
  const borrar = () => {
    let borrarT = document.querySelector("#res").innerHTML = "";
  }