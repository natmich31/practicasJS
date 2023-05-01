let sld = document.querySelector("#valor")
let vn = document.querySelector("#vn")
let div = document.querySelector("#res")
sld.oninput = () => {
  vn.innerHTML = sld.value;
  n = parseInt(sld.value)
  divs = ""
  for (i = 1; i <= n; i++) {
    divs += "<div class='cajita'>" + i + "</div>"
  }
  div.innerHTML = divs
}